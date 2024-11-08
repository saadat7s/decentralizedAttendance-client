import { Table } from '@mui/material'
import React from 'react'
import RenderTableHead from './RenderTableHead'


// this component
function RenderTable({ tableData, tableLabels }: { tableData: [], tableLabels: string[] }) {
    return (
        <Table>
            <RenderTableHead
                labels={tableLabels}
            />



        </Table>
    )
}

export default RenderTable