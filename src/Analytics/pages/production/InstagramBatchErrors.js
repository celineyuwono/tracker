import React from 'react'
import moment from 'moment'
import MuiTable from '../../components/MuiTable/errors'
import cls from '../analytics-home.module.scss'
import { ScrollArea } from '@duik/it'
import { getProdInstagramUsers } from '@utils/auth'

class InstagramBatchErrors extends React.Component {
  state = {
    data: [],
  }
  async componentDidMount() {
    getProdInstagramUsers().then((res) => {
      const data = res
        .filter((data) => data.crawl_error_code && data.ambassador_id)
        .map((data) => {
          return {
            ambassadorId: data.ambassador_id,
            username: data.username,
            programId: data.program_id,
            programName: data.program_name,
            igUid: data.ig_uid,
            errorCode: data.crawl_error_code,
            errorMessage: data.crawl_error_message,
            lastInvoked: moment(data.modified).format('YYYY-MM-DD HH:mm:ss'),
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

export default InstagramBatchErrors
