import React from 'react'
import {Box, Divider, Typography} from "@mui/material"
import {DataGrid, GridColDef} from "@mui/x-data-grid"
import axios from "axios"

interface Row {
    id: string
    isProduction: boolean
    displayName: string
    organizationUnitId: string
    createdAt: string
    updatedAt: string
}

function App() {
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

    const columns: GridColDef[] = [
        { field: 'API', headerName: 'API', flex: 0.2 },
        { field: 'Description', headerName: 'Description', flex: 0.6 },
        { field: 'Category', headerName: 'Category', flex: 0.2 },
    ]

    return (
        <Box display={"flex"} justifyContent={"center"} flexDirection={"column"}>
            <Typography variant={'h2'} textAlign={"center"} marginBottom={1}>Template</Typography>
            <Divider/>
            <Box marginTop={2}>
                <DataGrid
                    columns={columns}
                    rows={rows.splice(0,10)}
                    getRowId={el => el.API}
                    loading={loading}
                    disableSelectionOnClick={true}
                    autoHeight
                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                />
            </Box>
        </Box>
    )
}

export default App
