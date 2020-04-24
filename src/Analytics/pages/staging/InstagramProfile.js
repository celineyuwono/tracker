import React from 'react'
import MuiTable from '../../templates/scrape'
import cls from '../analytics-home.module.scss'
import { ScrollArea } from '@duik/it'
import { getStgInstagramUsers } from '@utils'
import { processInstagramProfile } from '@utils'

class InstagramProfile extends React.Component {
  state = {
    data: [],
  }
  componentDidMount() {
    getStgInstagramUsers()
      .then((res) => {
        return processInstagramProfile(res)
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

export default InstagramProfile
