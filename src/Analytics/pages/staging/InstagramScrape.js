import React from 'react'

import { Widget, WidgetHeader, WidgetContent, ScrollArea } from '@duik/it'

import { Chart, WidgetChartSummary } from '@components'
import { SelectYear, SelectMonth } from '@composed'
import { numberFormatZeros } from '@lib'

// import { barData, lineBlank } from './data/chartData'
import cls from '../analytics-home.module.scss'

import MuiTable from '../../components/MuiTable/scrape'
import ReactDOM from 'react-dom'
import axios from 'axios'
import pako from 'pako'
import moment from 'moment'

class InstagramScrape extends React.Component {
  state = {
    downloadFile: true,
    ageFilterChecked: false,
    tweetRecord: [],
  }

  componentDidMount() {
    //   async function readFile() {
    //     let res = await axios.request({
    //       method: 'GET',
    //       headers: {
    //         Accept: 'application/gzip',
    //       },
    //       url:
    //         'https://ambpf2.s3-ap-northeast-1.amazonaws.com/stg/programs/32/ambassadors',
    //       responseType: 'arraybuffer',
    //     })
    //     const tweet = pako.ungzip(res.data, { to: 'string' })
    //     console.log(res)
    //     return tweet
    //   }
    //   readFile().then((tweetInfo) => {
    //     const parsedTweets = JSON.parse(tweetInfo[0])
    //     const lastModified = moment(tweetInfo[1]).format('YYYY-MM-DD HH:mm:ss')
    //     console.log(parsedTweets)
    //     const tweetRecord = parsedTweets.map((tweet) => {
    //       return {
    //         ambassadorId: tweet.ambassador_id,
    //         programId: tweet.program_id,
    //         tweetDate: tweet.tweet_created_at,
    //         lastModified: lastModified,
    //       }
    //     })
    //     this.setState({ tweetRecord })
    //     console.log(this.state.tweetRecord)
    //   })
  }

  render() {
    const bob = [
      {
        programId: 1,
        programName: 'Lemonollo',
        igUsers: 1000,
        updateCompleted: 1000,
        updatePending: 0,
        updateRate: '100%',
        updateSucceeded: 1000,
        updateFailed: 0,
        successRate: '100%',
      },
      {
        programId: 2,
        programName: 'Appilee',
        igUsers: 500,
        updateCompleted: 300,
        updatePending: 200,
        updateRate: '60%',
        updateSucceeded: 220,
        updateFailed: 80,
        successRate: '73.33%',
      },
      {
        programId: 3,
        programName: 'Kiwinana',
        igUsers: 5,
        updateCompleted: 4,
        updatePending: 2,
        updateRate: '80%',
        updateSucceeded: 4,
        updateFailed: 0,
        successRate: '100%',
      },
      {
        programId: 4,
        programName: 'Chicken X',
        igUsers: 5,
        updateCompleted: 5,
        updatePending: 0,
        updateRate: '100%',
        updateSucceeded: 5,
        updateFailed: 0,
        successRate: '100%',
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

export default InstagramScrape
