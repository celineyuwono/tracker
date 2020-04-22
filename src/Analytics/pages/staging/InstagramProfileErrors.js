import React from 'react'

import { Widget, WidgetHeader, WidgetContent, ScrollArea } from '@duik/it'

import { Chart, WidgetChartSummary } from '@components'
import { SelectYear, SelectMonth } from '@composed'
import { numberFormatZeros } from '@lib'

// import { barData, lineBlank } from './data/chartData'
import cls from '../analytics-home.module.scss'

import MuiTable from '../../components/MuiTable/errors'
import ReactDOM from 'react-dom'
import axios from 'axios'
import pako from 'pako'
import moment from 'moment'

class InstagramProfileErrors extends React.Component {
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
      const data = res
        .filter((data) => data.crawl_error_code && data.ambassador_id)
        .map((data) => {
          return {
            ambassadorId: data.ambassador_id,
            username: data.username,
            programId: data.program_id,
            programName: data.program_name,
            igUid: data.ig_uid,
            errorCode: data.crawl_error_code,
            errorMessage: data.crawl_error_message,
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

export default InstagramProfileErrors
