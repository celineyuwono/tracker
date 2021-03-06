import {
  FormGroup,
  FormLabel,
  FormControl,
  ListItemText,
  TextField,
  Checkbox,
  FormControlLabel,
  Grid,
  Select,
  InputLabel,
  MenuItem,
} from '@material-ui/core'
import React from 'react'
import MUIDataTable from '../components/MuiTable/src/'
import moment from 'moment'

class MediaTable extends React.Component {
  state = {
    downloadFile: true,
    ageFilterChecked: false,
  }

  render() {
    const columns = [
      {
        name: 'ambassadorId',
        label: 'アンバサダーID',
        options: {
          filter: true,
        },
      },
      {
        name: 'programId',
        label: 'プログラムID',
        options: {
          filter: true,
        },
      },
      {
        name: 'tweetDate',
        label: 'ツーイト時間',
        options: {
          filter: true,
          sort: true,
          sortDirection: 'desc',
          customBodyRender: (value) => {
            return new moment(value).format('YYYY-MM-DD HH:mm:ss')
          },
          filterType: 'custom',
          customFilterListRender: (v) => {
            if (v[0] && v[1]) {
              return `Start Date: ${v[0]}, End Date: ${v[1]}`
            } else if (v[0]) {
              return `Start Date: ${v[0]}`
            } else if (v[1]) {
              return `End Date: ${v[1]}`
            }
            return false
          },
          filterOptions: {
            names: [],
            logic(date, filters) {
              var check = new Date(date)
              var from = new Date(filters[0])
              var to = new Date(filters[1])
              from.setDate(from.getDate() + 1)
              to.setDate(to.getDate() + 1)
              from = new Date(from).setHours(0, 0, 0, 0)
              to = new Date(to).setHours(23, 59, 59, 59)

              if (filters[0] && filters[1] && check >= to && check <= from) {
                return true
              } else if (filters[0] && check >= to) {
                return true
              } else if (filters[1] && check <= from) {
                return true
              }
              return false
            },
            display: (filterList, onChange, index, column) => (
              <div>
                <FormLabel>ツイート時間</FormLabel>
                <FormGroup row>
                  <TextField
                    id="startDate"
                    label="開始日付"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={filterList[index][0] || ''}
                    onChange={(event) => {
                      filterList[index][0] = event.target.value
                      onChange(filterList[index], index, column)
                    }}
                    style={{ width: '45%', marginRight: '5%' }}
                  />
                  <TextField
                    id="endDate"
                    label="終了日付"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={filterList[index][1] || ''}
                    onChange={(event) => {
                      filterList[index][1] = event.target.value
                      onChange(filterList[index], index, column)
                    }}
                    style={{ width: '45%', marginRight: '5%' }}
                  />
                </FormGroup>
              </div>
            ),
          },
          print: false,
        },
      },
      {
        name: 'lastModified',
        label: '収集時間',
        options: {
          filter: true,
          sort: true,
          sortDirection: 'desc',
          customBodyRender: (value) => {
            return new moment(value).format('YYYY-MM-DD HH:mm:ss')
          },
          filterType: 'custom',
          customFilterListRender: (v) => {
            if (v[0] && v[1]) {
              return `Start Date: ${v[0]}, End Date: ${v[1]}`
            } else if (v[0]) {
              return `Start Date: ${v[0]}`
            } else if (v[1]) {
              return `End Date: ${v[1]}`
            }
            return false
          },
          filterOptions: {
            names: [],
            logic(date, filters) {
              var check = new Date(date)
              var from = new Date(filters[0])
              var to = new Date(filters[1])
              from.setDate(from.getDate() + 1)
              to.setDate(to.getDate() + 1)
              from = new Date(from).setHours(0, 0, 0, 0)
              to = new Date(to).setHours(23, 59, 59, 59)

              if (filters[0] && filters[1] && check >= to && check <= from) {
                return true
              } else if (filters[0] && check >= to) {
                return true
              } else if (filters[1] && check <= from) {
                return true
              }
              return false
            },
            display: (filterList, onChange, index, column) => (
              <div>
                <FormLabel>ツイート時間</FormLabel>
                <FormGroup row>
                  <TextField
                    id="startDate"
                    label="開始日付"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={filterList[index][0] || ''}
                    onChange={(event) => {
                      filterList[index][0] = event.target.value
                      onChange(filterList[index], index, column)
                    }}
                    style={{ width: '45%', marginRight: '5%' }}
                  />
                  <TextField
                    id="endDate"
                    label="終了日付"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={filterList[index][1] || ''}
                    onChange={(event) => {
                      filterList[index][1] = event.target.value
                      onChange(filterList[index], index, column)
                    }}
                    style={{ width: '45%', marginRight: '5%' }}
                  />
                </FormGroup>
              </div>
            ),
          },
          print: false,
        },
      },
    ]

    let data = this.props.data

    const options = {
      filter: true,
      selectableRows: false,
      filterType: 'dropdown',
      responsive: 'stacked',
      rowsPerPage: 10,
      rowsPerPageOptions: [10, 30, 100],
      print: false,
      textLabels: {
        body: {
          noMatch: 'アンバサダーが見つけられませんでした。',
          toolTip: '並び替え',
          columnHeaderTooltip: (column) => `${column.label}を並び替え`,
        },
        toolbar: {
          search: '検索',
          downloadCsv: 'CSVダウンロード',
          print: '印刷',
          viewColumns: 'コラム表示',
          filterTable: 'フィルター',
        },
        filter: {
          all: '全部',
          title: 'フィルター',
          reset: 'リセット',
        },
        pagination: {
          rowsPerPage: '表示件数',
          displayRows: '/',
        },
        viewColumns: {
          title: 'カラム表示',
          titleAria: 'カラムを表示・非表示する',
        },
      },
      downloadOptions: {
        filename: 'tracker.csv',
        separator: ',',
        filterOptions: {
          useDisplayedColumnsOnly: true,
          useDisplayedRowsOnly: true,
        },
      },
      onDownload: (buildHead, buildBody, columns, data) => {
        if (this.state.downloadFile) {
          return `${buildHead(columns)}${buildBody(data)}`.trim()
        }
        return false
      },
      onRowsSelect: (rowsSelected, allRows) => {
        console.log(rowsSelected, allRows)
      },
      onRowsDelete: (rowsDeleted) => {
        console.log(rowsDeleted, 'were deleted!')
      },
      onChangePage: (numberRows) => {
        console.log(numberRows)
      },
      onSearchChange: (searchText) => {
        console.log(searchText)
      },
      onColumnSortChange: (column, direction) => {
        console.log(column, direction)
      },
      onColumnViewChange: (column, action) => {
        console.log(column, action)
      },
      onFilterChange: (column, filters) => {
        console.log(column, filters)
      },
      onCellClick: (cellIndex, rowIndex) => {
        console.log(cellIndex, rowIndex)
      },
      onRowClick: (rowData, rowState) => {
        console.log(rowData, rowState)
      },
    }

    return (
      <React.Fragment>
        <MUIDataTable
          title={'Last Scraped Tweets'}
          data={data}
          columns={columns}
          options={options}
        />
      </React.Fragment>
    )
  }
}

export default MediaTable
