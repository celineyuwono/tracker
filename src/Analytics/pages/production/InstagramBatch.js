import React from 'react'

import { ScrollArea } from '@duik/it'
import cls from '../analytics-home.module.scss'
import MuiTable from '../../templates/batch'
import { getProdInstagramUsers } from '@utils'
import { processInstagramBatch } from '@utils'

class InstagramBatch extends React.Component {
  state = {
    data: [],
  }

  componentDidMount() {
    getProdInstagramUsers()
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
