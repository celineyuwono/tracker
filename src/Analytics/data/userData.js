import moment from 'moment'
import pako from 'pako'
/**
 * 対象日付期間内のtweetsを配列に格納して返す。
 * gzip圧縮されているため展開した状態で返却する。
 */
export function fetchUserData(programId) {
  const dateFrom = '2005-01-01'
  const dateTo = moment().add(1, 'days')
  const dateList = getMonthsBetween(dateFrom.toDate(), dateTo.toDate())
  return Promise.all(
    dateList.map(async (date) => {
      const worker = new UngzipWorker()
      const promise = new Promise((resolve) => {
        worker.addEventListener('message', (event) => {
          worker.terminate()
          resolve(event.data.uncompressed)
        })
      })

      const result = await axios.request({
        method: 'get',
        headers: {
          Accept: 'application/gzip',
        },
        url: `/object/${programId}/voices/twitter/${moment(date).format(
          'YYYY-MM'
        )}.gz`,
        responseType: 'arraybuffer',
      })

      return promise
    })
  )
}

self.addEventListener('message', (event) => {
  const uncompressed = JSON.parse(
    pako.ungzip(event.data.compressed, { to: 'string' })
  )
  self.postMessage({ uncompressed })
})
