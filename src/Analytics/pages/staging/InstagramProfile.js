import React from 'react'
import MuiTable from '../../templates/scrape'
import cls from '../analytics-home.module.scss'
import { ScrollArea } from '@duik/it'
import { getStgInstagramUsers } from '@utils'
import { processInstagramProfile } from '@utils'
import { UiContext } from '@context'

class InstagramProfile extends React.Component {
  static contextType = UiContext

  async componentDidMount() {
    if (
      this.context.stgIgUsersProf.length < 1 ||
      this.context.updateUrl === '/stg/instagram/profile'
    ) {
      try {
        const users = await getStgInstagramUsers()
        const data = await processInstagramProfile(users)
        this.context.setStgIgUsersProf(data)
        this.context.setUpdateUrl('')
      } catch {
        this.context.setUpdateUrl('')
      }
    }
  }

  render() {
    return (
      <ScrollArea className={cls['analytics-home']}>
        <MuiTable data={this.context.stgIgUsersProf} />
      </ScrollArea>
    )
  }
}

export default InstagramProfile
