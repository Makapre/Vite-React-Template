import React from 'react'
import { Box, Divider, Typography } from "@mui/material"
import axios from "axios"
import Table from './components/table/table'
import { Row } from './types/row'

const App = () => {
    const [rows, setRows] = React.useState<Row[]>([])
    const [pageSize, setPageSize] = React.useState<number>(25)
    const [loading, setLoading] = React.useState<boolean>(true)

    const Headers: HeadersInit = {
        'Content-Type': 'application/json'
    }

    const API_URL: string = 'https://api.publicapis.org/entries'

    React.useEffect(() => {
        axios.get(API_URL, {headers: Headers})
            .then(response => {
                if(response.status === 200){
                    console.log(response.data)
                    setRows(response.data.entries)
                }
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, [])

    return (
        <Box display={"flex"} justifyContent={"center"} flexDirection={"column"}>
            <Typography variant={'h2'} textAlign={"center"} marginBottom={1}>Template</Typography>
            <Divider/>
            <Box marginTop={2}>
                <Table rows={rows} loading={loading} pageSize={pageSize} setPageSize={setPageSize}/>
            </Box>
        </Box>
    )
}

export default App
