import React from 'react'
import cls from '../analytics-home.module.scss'
import MuiTable from '../../templates/errors'
import { ScrollArea } from '@duik/it'
import { getProdInstagramUsers } from '@utils'
import { processInstagramProfileErrors } from '@utils'
import { UiContext } from '@context'

class InstagramProfileErrors extends React.Component {
  static contextType = UiContext

  async componentDidMount() {
    if (
      this.context.prodIgUsersProfErr.length < 1 ||
      this.context.updateUrl === '/prod/instagram/profile/errors'
    ) {
      try {
        const users = await getProdInstagramUsers()
        const data = await processInstagramProfileErrors(users)
        this.context.setProdIgUsersProfErr(data)
        this.context.setUpdateUrl('')
      } catch {
        this.context.setUpdateUrl('')
      }
    }
  }

  render() {
    return (
      <ScrollArea className={cls['analytics-home']}>
        <MuiTable
          data={this.context.prodIgUsersProfErr}
          title={'Instagram Profile Scraping Errors'}
        />
      </ScrollArea>
    )
  }
}

export default InstagramProfileErrors
