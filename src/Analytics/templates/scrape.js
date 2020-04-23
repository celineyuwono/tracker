import React from 'react'
import MUIDataTable from '../components/MuiTable/src/'

class ScrapeTable extends React.Component {
  state = {
    downloadFile: true,
    ageFilterChecked: false,
  }

  render() {
    const columns = [
      {
        name: 'programId',
        label: 'Program ID',
        options: {
          filter: true,
        },
      },
      {
        name: 'programName',
        label: 'Program Name',
        options: {
          filter: true,
        },
      },
      {
        name: 'igUsers',
        label: 'Total Instagram Users',
        options: {
          filter: false,
        },
      },
      {
        name: 'updateSucceeded',
        label: 'Update Succeeded',
        options: {
          filter: false,
        },
      },
      {
        name: 'updateFailed',
        label: 'Update Failed',
        options: {
          filter: false,
        },
      },
      {
        name: 'updateCompleted',
        label: 'Update Completed',
        options: {
          filter: false,
        },
      },
      {
        name: 'updatePending',
        label: 'Update Pending',
        options: {
          filter: false,
        },
      },
      {
        name: 'updateRate',
        label: '% Update Finished',
        options: {
          filter: false,
        },
      },
      {
        name: 'successRate',
        label: '% Current Success Rate',
        options: {
          filter: false,
        },
      },
    ]

    let data = this.props.data

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
          noMatch: 'アンバサダーが見つけれませんでした。',
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
          title={'Instagram Profile Scraping'}
          data={data}
          columns={columns}
          options={options}
        />
        <p>
          % Current Success Rate = Update Succeed / (Update Succeed + Update
          Failed)
        </p>
        <p></p>
        <p></p>
        <p></p>
      </React.Fragment>
    )
  }
}

export default ScrapeTable