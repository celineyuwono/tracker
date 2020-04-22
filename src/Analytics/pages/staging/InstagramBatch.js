import React from 'react'

import { Widget, WidgetHeader, WidgetContent, ScrollArea } from '@duik/it'

import { Chart, WidgetChartSummary } from '@components'
import { SelectYear, SelectMonth } from '@composed'
import { numberFormatZeros } from '@lib'

// import { barData, lineBlank } from './data/chartData'
import cls from '../analytics-home.module.scss'

import MuiTable from '../../components/MuiTable/batch'
import ReactDOM from 'react-dom'
import axios from 'axios'
import pako from 'pako'
import moment from 'moment'

class InstagramBatch extends React.Component {
  state = {
    data: [],
  }

  componentDidMount() {
    async function readFile() {
      //  programId: 1,
      //   programName: 'Test Program',
      //   igUsers: 1000,
      //   updateSucceeded: 1,
      //   updateFailed: 0,
      //   successRate: '100%',
      let token = await axios.post(
        'https://stg-ac-client-api.ambassadors.jp/basic/auth',
        {
          email: 'yuwono@agilemedia.jp',
          password: 'amn',
        }
      )
      token = JSON.parse(token.request.response).data.token
      const res = await axios.get(
        'https://stg-ac-client-api.ambassadors.jp/voice/instagramUsers',
        {
          headers: {
            Authorization: token,
            'x-api-key': 'Cfa65VJNXh11klkLOlSoZ11Ec0KvDxdX5RMVEQDo',
          },
        }
      )
      return res.data.data.instagram_users
    }
    readFile().then((res) => {
      let programId = new Set()
      let programName = []
      let successRate = []
      res.forEach((user) => {
        if (user.program_id) {
          programId.add(user.program_id)
        }
      })
      programId = Array.from(programId).sort((a, b) => {
        return a - b
      })

      let length = programId.length
      let igUsers = new Array(length).fill(0)
      let updateSucceeded = new Array(length).fill(0)
      let updateFailed = new Array(length).fill(0)
      res.forEach((user) => {
        const idx = programId.indexOf(user.program_id)
        if (!programName[idx]) {
          programName[idx] = user.program_name
        }
        igUsers[idx]++
        if (user.crawl_error_code) {
          updateSucceeded[idx]++
        } else {
          updateFailed[idx]++
        }
        successRate[idx] =
          ((igUsers[idx] - updateFailed[idx]) / igUsers[idx]) * 100
      })

      const array = new Array(length).fill({})
      for (let i = 0; i < length; i++) {
        array[i]['programId'] = programId[i]
        array[i]['programName'] = programName[i]
        array[i]['igUsers'] = igUsers[i]
        array[i]['updateSuceeded'] = updateSucceeded[i]
        array[i]['updateFailed'] = updateFailed[i]
        array[i]['successRate'] = successRate[i]
        console.log('asdf')
      }
      console.log('arr', array)

      // console.log(programs)
      // console.log('prorgamName', programName)
      // console.log('users', igUsers)
      // console.log('success', updateSucceeded)
      // console.log('failed', updateFailed)
      // console.log('successRate', successRate)

      const data = array.map((data) => {
        return {
          ...data,
          updateSucceeded: `${Math.round(data.updateSuceeded * 100) / 100}%`,
          lastInvoked: moment(data.modified).format('YYYY-MM-DD HH:mm:ss'),
        }
      })
      this.setState({
        data,
      })
    })
  }

  render() {
    return (
      <ScrollArea className={cls['analytics-home']}>
        <MuiTable data={this.state.data} />
      </ScrollArea>
    )
  }
}

export default InstagramBatch
