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

class InstagramScrapeErrors extends React.Component {
  state = {
    downloadFile: true,
    ageFilterChecked: false,
    tweetRecord: [],
  }

  componentDidMount() {}

  render() {
    const bob = [
      {
        programId: 1,
        programName: 'Test Program',
        ambassadorId: '4524354',
        ambassadorName: 'boii99',
        errorCode: 400,
        errorMessage: "It's an error!",
      },
      {
        programId: 1,
        programName: 'Test Program',
        ambassadorId: '1653654',
        ambassadorName: 'hellokitt4',
        errorCode: 400,
        errorMessage: 'Bla',
      },
      {
        programId: 1,
        programName: 'Test Program',
        ambassadorId: '012394',
        ambassadorName: 'orangpp',
        errorCode: 700,
        errorMessage: 'ERR',
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

export default InstagramScrapeErrors
