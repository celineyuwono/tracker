import React from 'react'
import MuiTable from '../../templates/errors'
import cls from '../analytics-home.module.scss'
import { ScrollArea } from '@duik/it'
import { getStgInstagramUsers } from '@utils'
import { processInstagramBatchErrors } from '@utils'

class InstagramBatchErrors extends React.Component {
  state = {
    data: [],
  }
  async componentDidMount() {
    getStgInstagramUsers()
      .then((res) => {
        return processInstagramBatchErrors(res)
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
        <MuiTable data={this.state.data} title={'Instagram Batch Errors'} />
      </ScrollArea>
    )
  }
}

export default InstagramBatchErrors
