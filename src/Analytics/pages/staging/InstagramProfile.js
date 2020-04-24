import React from 'react'
import moment from 'moment'
import MuiTable from '../../templates/scrape'
import cls from '../analytics-home.module.scss'
import { ScrollArea } from '@duik/it'
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
        if (
          user.last_scraped &&
          moment(user.last_scraped) > moment().startOf('day') &&
          !user.scrape_error_code
        ) {
          updateSucceeded[idx]++
          updateCompleted[idx]++
        } else if (
          user.last_scraped &&
          moment(user.last_scraped) > moment().startOf('day') &&
          user.scrape_error_code
        ) {
          updateFailed[idx]++
          updateCompleted[idx]++
        } else if (
          !user.last_scraped ||
          moment(user.last_scraped) < moment().startOf('day')
        ) {
          updatePending[idx]++
        }

        updateRate[idx] = (updateCompleted[idx] / igUsers[idx]) * 100
        if (updateCompleted[idx] > 0) {
          successRate[idx] = (updateSucceeded[idx] / updateCompleted[idx]) * 100
        } else {
          successRate[idx] = 0
        }

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
