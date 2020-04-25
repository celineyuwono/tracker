import React from 'react'
import MuiTable from '../../templates/scrape'
import cls from '../analytics-home.module.scss'
import { ScrollArea } from '@duik/it'
import { getProdInstagramUsers } from '@utils'
import { processInstagramProfile } from '@utils'
import { UiContext } from '@context'

class InstagramProfile extends React.Component {
  static contextType = UiContext

  componentDidMount() {
    if (this.context.prodIgUsersProf.length < 1) {
      getProdInstagramUsers()
        .then((res) => {
          return processInstagramProfile(res)
        })
        .then((data) => {
          this.context.setProdIgUsersProf(data)
        })
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
