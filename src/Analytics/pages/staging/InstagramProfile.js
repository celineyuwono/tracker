import React from 'react'

import { Widget, WidgetHeader, WidgetContent, ScrollArea } from '@duik/it'

import { Chart, WidgetChartSummary } from '@components'
import { SelectYear, SelectMonth } from '@composed'
import { numberFormatZeros } from '@lib'

import ReactDOM from 'react-dom'
import axios from 'axios'
import moment from 'moment'
import MuiTable from '../../components/MuiTable/scrape'
import cls from '../analytics-home.module.scss'

class InstagramProfile extends React.Component {
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
      const data = res.map((tweet) => {
        return {
          ambassadorId: tweet.ambassador_id,
          programId: tweet.program_id,
          igUid: tweet.ig_uid,
        }
      })
      this.setState({
        data,
      })
      console.log('data', this.state.data)
      // moment(tweetInfo[1]).format('YYYY-MM-DD HH:mm:ss')
    })
  }

  render() {
    // const bob = [
    //   {
    //     programId: 1,
    //     programName: 'Lemonollo',
    //     igUsers: 1000,
    //     updateCompleted: 1000,
    //     updatePending: 0,
    //     updateRate: '100%',
    //     updateSucceeded: 1000,
    //     updateFailed: 0,
    //     successRate: '100%',
    //   },
    //   {
    //     programId: 2,
    //     programName: 'Appilee',
    //     igUsers: 500,
    //     updateCompleted: 300,
    //     updatePending: 200,
    //     updateRate: '60%',
    //     updateSucceeded: 220,
    //     updateFailed: 80,
    //     successRate: '73.33%',
    //   },
    //   {
    //     programId: 3,
    //     programName: 'Kiwinana',
    //     igUsers: 5,
    //     updateCompleted: 4,
    //     updatePending: 2,
    //     updateRate: '80%',
    //     updateSucceeded: 4,
    //     updateFailed: 0,
    //     successRate: '100%',
    //   },
    //   {
    //     programId: 4,
    //     programName: 'Chicken X',
    //     igUsers: 5,
    //     updateCompleted: 5,
    //     updatePending: 0,
    //     updateRate: '100%',
    //     updateSucceeded: 5,
    //     updateFailed: 0,
    //     successRate: '100%',
    //   },
    // ]

    return (
      <ScrollArea className={cls['analytics-home']}>
        <MuiTable data={this.state.data} />
      </ScrollArea>
    )
  }
}

export default InstagramProfile
