import React from 'react'
import MuiTable from '../../templates/scrape'
import cls from '../analytics-home.module.scss'
import { ScrollArea } from '@duik/it'
import { getProdInstagramUsers } from '@utils'
import { processInstagramProfile } from '@utils'
import { UiContext } from '@context'

class InstagramProfile extends React.Component {
  static contextType = UiContext

  async componentDidMount() {
    if (
      this.context.prodIgUsersProf.length < 1 ||
      this.context.updateUrl === '/prod/instagram/profile'
    ) {
      try {
        const users = await getProdInstagramUsers()
        const data = await processInstagramProfile(users)
        this.context.setProdIgUsersProf(data)
        this.context.setUpdateUrl('')
      } catch {
        this.context.setUpdateUrl('')
      }
    }
  }

  render() {
    return (
      <ScrollArea className={cls['analytics-home']}>
        <MuiTable data={this.context.prodIgUsersProf} />
      </ScrollArea>
    )
  }
}

export default InstagramProfile
