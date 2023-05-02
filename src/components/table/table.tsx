import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { Row } from "../../types/row"

interface Props {
  rows: Row[]
  loading: boolean
  pageSize: number
  setPageSize: (n: number) => void
}

const columns: GridColDef[] = [
  { field: 'API', headerName: 'API', flex: 0.2 },
  { field: 'Description', headerName: 'Description', flex: 0.6 },
  { field: 'Category', headerName: 'Category', flex: 0.2 },
]

const Table = (props: Props) => {
  return <DataGrid
        columns={columns}
        rows={props.rows.splice(0,10)}
        getRowId={el => el.API}
        loading={props.loading}
        disableSelectionOnClick={true}
        autoHeight
        pageSize={props.pageSize}
        onPageSizeChange={(newPageSize: number) => props.setPageSize(newPageSize)}
    />
}

export default Table
