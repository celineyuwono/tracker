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
import moment from 'moment'
import { getStgInstagramUsers } from '@utils/auth'

class InstagramProfileErrors extends React.Component {
  state = {
    data: [],
  }
  componentDidMount() {
    getStgInstagramUsers().then((res) => {
      const data = res
        .filter((data) => data.scrape_error_code && data.ambassador_id)
        .map((data) => {
          return {
            ambassadorId: data.ambassador_id,
            username: data.username,
            programId: data.program_id,
            programName: data.program_name,
            igUid: data.ig_uid,
            errorCode: data.scrape_error_code,
            errorMessage: data.scrape_error_message,
            lastInvoked: moment(data.last_scraped).format(
              'YYYY-MM-DD HH:mm:ss'
            ),
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