import React from 'react'

import { ScrollArea } from '@duik/it'
import cls from '../analytics-home.module.scss'
import MuiTable from '../../templates/batch'
import moment from 'moment'
import { getProdInstagramUsers } from '@utils/auth'

class InstagramBatch extends React.Component {
  state = {
    data: [],
  }

  componentDidMount() {
    getProdInstagramUsers().then((res) => {
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
          user.performances_last_updated &&
          (!lastInvoked[idx] ||
            moment(user.performances_last_updated) > lastInvoked[idx])
        ) {
          lastInvoked[idx] = moment(user.performances_last_updated)
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
