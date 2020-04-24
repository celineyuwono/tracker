import React from 'react'
import cls from '../analytics-home.module.scss'
import MuiTable from '../../templates/errors'
import { ScrollArea } from '@duik/it'
import { getStgInstagramUsers } from '@utils'
import { processInstagramProfileErrors } from '@utils'

class InstagramProfileErrors extends React.Component {
  state = {
    data: [],
  }
  componentDidMount() {
    getStgInstagramUsers()
      .then((res) => {
        return processInstagramProfileErrors(res)
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
        <MuiTable data={this.state.data} title={'Instagram Profile Errors'} />
      </ScrollArea>
    )
  }
}

export default InstagramProfileErrors
