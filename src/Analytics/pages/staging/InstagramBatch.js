import React from 'react'
import cls from '../analytics-home.module.scss'
import MuiTable from '../../templates/batch'
import { ScrollArea } from '@duik/it'
import { getStgInstagramUsers } from '@utils'
import { processInstagramBatch } from '@utils'

class InstagramBatch extends React.Component {
  state = {
    data: [],
  }

  componentDidMount() {
    getStgInstagramUsers()
      .then((res) => {
        return processInstagramBatch(res)
      })
      .then((data) => {
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
