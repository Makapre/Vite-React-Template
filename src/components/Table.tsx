import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { Row } from "../types/Row"

interface Props {
  rows: Row[]
  loading: boolean
  pageSize: number
  setPageSize: (n: number) => void
  columns: GridColDef[]
}

export const Table = (props: Props) => {
  return <DataGrid
        columns={props.columns}
        rows={props.rows.splice(0,10)}
        getRowId={el => el.API}
        loading={props.loading}
        disableSelectionOnClick={true}
        autoHeight
        pageSize={props.pageSize}
        onPageSizeChange={(newPageSize: number) => props.setPageSize(newPageSize)}
    />
}
