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
import ReactDOM from 'react-dom'
import MUIDataTable from './src/'

class Example extends React.Component {
  state = {
    downloadFile: true,
    ageFilterChecked: false,
  }

  componentDidMount() {
    async function readFile() {
      let url =
        'https://ambpf2.s3-ap-northeast-1.amazonaws.com/stg/resources/32/voices/twitter/2020-04.gz'
      const { ungzip } = require('node-gzip')
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/gzip',
        },
        responseType: 'arraybuffer',
      })
      function toBuffer(ab) {
        var buf = Buffer.alloc(parseInt(ab.byteLength))
        var view = new Uint8Array(ab)
        for (var i = 0; i < buf.length; ++i) {
          buf[i] = view[i]
        }
        return buf
      }
      const x = toBuffer(res)
      //change res from arraybuffer to buffer, then from buffer to string
      const data = await ungzip(x)
      return data
    }
    //base64->binary->Uint8 and then deflate

    readFile().then((data) => console.log(typeof data))
  }

  render() {
    const columns = [
      {
        name: 'name',
        label: '氏名',
        options: {
          filter: true,
        },
      },
      {
        name: 'title',
        label: 'タイトル',
        options: {
          filter: true,
          customFilterListOptions: {
            render: (v) => v.toLowerCase(),
          },
        },
      },
      {
        name: 'location',
        label: '場所',
        options: {
          filter: true,
          display: 'true',
          filterType: 'custom',
          customFilterListOptions: {
            render: (v) => v.map((l) => l.toUpperCase()),
          },
          filterOptions: {
            logic: (location, filters) => {
              if (filters.length) return !filters.includes(location)
              return false
            },
            display: (filterList, onChange, index, column) => {
              const optionValues = ['Minneapolis', 'New York', 'Seattle']
              return (
                <FormControl>
                  <InputLabel htmlFor="select-multiple-chip">
                    Location
                  </InputLabel>
                  <Select
                    multiple
                    value={filterList[index]}
                    renderValue={(selected) => selected.join(', ')}
                    onChange={(event) => {
                      filterList[index] = event.target.value
                      onChange(filterList[index], index, column)
                    }}
                  >
                    {optionValues.map((item) => (
                      <MenuItem key={item} value={item}>
                        <Checkbox
                          color="primary"
                          checked={filterList[index].indexOf(item) > -1}
                        />
                        <ListItemText primary={item} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )
            },
          },
        },
      },
      {
        name: 'age',
        label: '日付',
        options: {
          filter: true,
          filterType: 'custom',
          customFilterListOptions: {
            render: (v) => {
              if (v[0] && v[1] && this.state.ageFilterChecked) {
                return [`Min Age: ${v[0]}`, `Max Age: ${v[1]}`]
              } else if (v[0] && v[1] && !this.state.ageFilterChecked) {
                return `Min Age: ${v[0]}, Max Age: ${v[1]}`
              } else if (v[0]) {
                return `Min Age: ${v[0]}`
              } else if (v[1]) {
                return `Max Age: ${v[1]}`
              }
              return false
            },
            update: (filterList, filterPos, index) => {
              console.log(
                'customFilterListOnDelete: ',
                filterList,
                filterPos,
                index
              )

              if (filterPos === 0) {
                filterList[index].splice(filterPos, 1, '')
              } else if (filterPos === 1) {
                filterList[index].splice(filterPos, 1)
              } else if (filterPos === -1) {
                filterList[index] = []
              }

              return filterList
            },
          },
          filterOptions: {
            names: [],
            logic(age, filters) {
              if (filters[0] && filters[1]) {
                return age < filters[0] || age > filters[1]
              } else if (filters[0]) {
                return age < filters[0]
              } else if (filters[1]) {
                return age > filters[1]
              }
              return false
            },
            display: (filterList, onChange, index, column) => (
              <div>
                <FormLabel>Date Range</FormLabel>
                <FormGroup row>
                  <TextField
                    label="min"
                    value={filterList[index][0] || ''}
                    onChange={(event) => {
                      filterList[index][0] = event.target.value
                      onChange(filterList[index], index, column)
                    }}
                    style={{ width: '45%', marginRight: '5%' }}
                  />
                  <TextField
                    label="max"
                    value={filterList[index][1] || ''}
                    onChange={(event) => {
                      filterList[index][1] = event.target.value
                      onChange(filterList[index], index, column)
                    }}
                    style={{ width: '45%' }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.ageFilterChecked}
                        onChange={(event) =>
                          this.setState({
                            ageFilterChecked: event.target.checked,
                          })
                        }
                      />
                    }
                    label="Separate Values"
                    style={{ marginLeft: '0px' }}
                  />
                </FormGroup>
              </div>
            ),
          },
          print: false,
        },
      },
      // {
      //   name: 'Status',
      //   options: {
      //     filter: true,
      //     filterType: 'checkbox',
      //     filterOptions: {
      //       names: ['Fail', 'Success', 'Pending'],
      //       logic(salary, filterVal) {
      //         salary = salary.replace(/[^\d]/g, '')
      //         const show =
      //           (filterVal.indexOf('Lower wages') >= 0 && salary < 100000) ||
      //           (filterVal.indexOf('Average wages') >= 0 &&
      //             salary >= 100000 &&
      //             salary < 200000) ||
      //           (filterVal.indexOf('Higher wages') >= 0 && salary >= 200000)
      //         return !show
      //       },
      //     },
      //     sort: false,
      //   },
      // },
    ]

    const data = [
      {
        name: 'Gabby George',
        title: 'Business Analyst',
        location: 'Minneapolis',
        age: 30,
        status: '$100,000',
        phone: { home: '867-5309', cell: '123-4567' },
      },
      {
        name: 'Aiden Lloyd',
        title: 'Business Consultant',
        location: 'Dallas',
        age: 55,
        status: '$200,000',
        phone: { home: '867-5310', cell: '123-4568' },
      },
      {
        name: 'Jaden Collins',
        title: 'Attorney',
        location: 'Santa Ana',
        age: 27,
        status: '$500,000',
        phone: { home: '867-5311', cell: '123-4569' },
      },
      {
        name: 'Franky Rees',
        title: 'Business Analyst',
        location: 'St. Petersburg',
        age: 22,
        status: '$50,000',
        phone: { home: '867-5312', cell: '123-4569' },
      },
    ]

    const options = {
      filter: true,
      selectableRows: false,
      filterType: 'dropdown',
      responsive: 'stacked',
      rowsPerPage: 15,
      rowsPerPageOptions: [15, 30, 100],
      print: false,
      textLabels: {
        body: {
          noMatch: 'レコードが見つけれませんでした。',
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
          all: '全レコード',
          title: 'フィルター',
          reset: 'リセット',
        },
        pagination: {
          rowsPerPage: '表示件数',
          displayRows: 'から',
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
          title={'Tracker'}
          data={data}
          columns={columns}
          options={options}
        />
      </React.Fragment>
    )
  }
}

export default Example
