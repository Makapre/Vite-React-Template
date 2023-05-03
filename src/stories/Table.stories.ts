import type { Meta, StoryObj } from '@storybook/react'
import { GridColDef } from '@mui/x-data-grid'
import { Table } from '../components/Table'


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const columns: GridColDef[] = [
  { field: 'API', headerName: 'API', flex: 0.2 },
  { field: 'Description', headerName: 'Description', flex: 0.6 },
  { field: 'Category', headerName: 'Category', flex: 0.2 },
]

export const Empty: Story = {
  args: {
    rows: [],
    loading: false,
    pageSize: 10,
    setPageSize: () => 10,
    columns: columns
  },
}

export const Filled: Story = {
  args: {
    rows: [{
      API: 'first api',
      Description: 'Lorem Ipsum...',
      Category: 'Porn'
    }],
    loading: false,
    pageSize: 10,
    setPageSize: () => 10,
    columns: columns
  },
}

export const Loading: Story = {
  args: {
    rows: [],
    loading: true,
    pageSize: 10,
    setPageSize: () => 10,
    columns: columns
  },
}
