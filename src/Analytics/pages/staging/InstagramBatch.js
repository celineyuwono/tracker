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
    downloadFile: true,
    ageFilterChecked: false,
    tweetRecord: [],
  }

  componentDidMount() {
    async function readFile() {
      let res = await axios.request({
        method: 'GET',
        headers: {
          Accept: 'application/gzip',
        },
        url:
          'https://ambpf2.s3-ap-northeast-1.amazonaws.com/stg/resources/32/voices/twitter/2020-04.gz',
        responseType: 'arraybuffer',
      })
      const tweet = pako.ungzip(res.data, { to: 'string' })
      console.log(res.headers)
      const lastModified = res.headers['last-modified']
      return [tweet, lastModified]
    }
    readFile().then((tweetInfo) => {
      const parsedTweets = JSON.parse(tweetInfo[0])
      const lastModified = moment(tweetInfo[1]).format('YYYY-MM-DD HH:mm:ss')
      console.log(parsedTweets)
      const tweetRecord = parsedTweets.map((tweet) => {
        return {
          ambassadorId: tweet.ambassador_id,
          programId: tweet.program_id,
          tweetDate: tweet.tweet_created_at,
          lastModified: lastModified,
        }
      })
      this.setState({ tweetRecord })
      console.log(this.state.tweetRecord)
    })
  }

  render() {
    const bob = [
      {
        programId: 1,
        programName: 'Test Program',
        igUsers: 1000,
        igUsersToUpdate: 1,
        updateSucceeded: 1,
        updateFailed: 0,
        successRate: '100%',
      },
      {
        programId: 2,
        programName: 'Orango213',
        igUsers: 500,
        igUsersToUpdate: 100,
        updateSucceeded: 50,
        updateFailed: 50,
        successRate: '90%',
      },
      {
        programId: 3,
        programName: 'Hello hello',
        igUsers: 5,
        igUsersToUpdate: 4,
        updateSucceeded: 3,
        updateFailed: 1,
        successRate: '80%',
      },
    ]

    return (
      <ScrollArea className={cls['analytics-home']}>
        <MuiTable data={bob} />

        {/* <MuiTable data={this.state.tweetRecord} /> */}
      </ScrollArea>
    )
  }
}

export default InstagramBatch
