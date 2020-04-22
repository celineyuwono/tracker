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
      let lastInvoked = []
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

        if (
          user.modified &&
          (!lastInvoked[idx] || moment(user.modified) > lastInvoked[idx])
        ) {
          lastInvoked[idx] = moment(user.modified)
        }
      })

      const array = []
      for (let i = 0; i < length; i++) {
        array.push({
          programId: programId[i],
          programName: programName[i],
          igUsers: igUsers[i],
          updateSucceeded: updateSucceeded[i],
          updateFailed: updateFailed[i],
          successRate: successRate[i],
          lastInvoked: lastInvoked[i],
        })
      }

      const data = array.map((data) => {
        return {
          ...data,
          successRate: `${Math.round(data.successRate * 100) / 100}%`,
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
