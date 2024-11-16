import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import axios from 'axios'
import { Row } from './types/Row'
import styled from '@emotion/styled'
import { Table } from './components/Table'
import { GridColDef } from '@mui/x-data-grid'

const App = () => {
  const [rows, setRows] = React.useState<Row[]>([])
  const [pageSize, setPageSize] = React.useState<number>(25)
  const [loading, setLoading] = React.useState<boolean>(true)

  const Headers: HeadersInit = {
    'Content-Type': 'application/json'
  }

  const API_URL = 'https://cat-fact.herokuapp.com/facts'

  React.useEffect(() => {
    axios.get(API_URL, { headers: Headers })
      .then(response => {
        if (response.status === 200) {
          console.log(response.data)
          setRows(response.data)
        }
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false))
  }, [])

  const columns: GridColDef[] = [
    { field: 'Fact', headerName: 'text', flex: 0.8 },
    { field: 'Animal', headerName: 'type', flex: 0.2 }
  ]

  return (
    <Container>
      <Typography variant={'h2'} textAlign={'center'} marginBottom={1}>Template</Typography>
      <Divider/>
      <Box marginTop={2}>
        <Table
          rows={rows}
          loading={loading}
          pageSize={pageSize}
          setPageSize={setPageSize}
          columns={columns}
        />
      </Box>
    </Container>
  )
}

const Container = styled(Box)`
  display: flex
  justify-content: center
  flex-direction: column
`

export default App
