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
import { getStgInstagramUsers } from '@utils/auth'

class InstagramProfile extends React.Component {
  state = {
    data: [],
  }
  componentDidMount() {
    getStgInstagramUsers().then((res) => {
      let programId = new Set()
      let programName = []
      let updateRate = []
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
      let updateCompleted = new Array(length).fill(0)
      let updatePending = new Array(length).fill(0)
      let updateSucceeded = new Array(length).fill(0)
      let updateFailed = new Array(length).fill(0)
      res.forEach((user) => {
        const idx = programId.indexOf(user.program_id)
        if (!programName[idx]) {
          programName[idx] = user.program_name
        }
        igUsers[idx]++
        if (user.last_scraped && !user.scrape_error_code) {
          updateSucceeded[idx]++
        }
        if (user.last_scraped && user.last_scraped < moment().startOf('day')) {
          updateCompleted[idx]++
        } else {
          updatePending[idx]++
        }

        updateFailed[idx] =
          igUsers[idx] - updatePending[idx] - updateSucceeded[idx]

        updateRate[idx] =
          ((igUsers[idx] - updatePending[idx]) / igUsers[idx]) * 100
        successRate[idx] =
          ((igUsers[idx] - updateFailed[idx]) / igUsers[idx]) * 100

        if (
          user.last_scraped &&
          (!lastInvoked[idx] || moment(user.last_scraped) > lastInvoked[idx])
        ) {
          lastInvoked[idx] = moment(user.last_scraped)
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
          updateCompleted: updateCompleted[i],
          updatePending: updatePending[i],
          updateRate: updateRate[i],
          successRate: successRate[i],
          lastInvoked: lastInvoked[i],
        })
      }

      const data = array.map((data) => {
        return {
          ...data,
          updateRate: `${Math.round(data.updateRate * 100) / 100}%`,
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

export default InstagramProfile
