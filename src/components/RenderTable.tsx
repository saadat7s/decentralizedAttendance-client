import { Table } from '@mui/material'
import React from 'react'
import RenderTableHead from './RenderTableHead'
import RenderTableBody from './RenderTableBody'
import RenderStudentTableBody from './RenderStudentTableBody'


// this component
function RenderTable({ children, tableLabels }: { children: React.ReactNode | null, tableLabels: string[] }) {
    return (
        <Table>
            <RenderTableHead
                labels={tableLabels}
            />

            {children}

        </Table>
    )
}

export default RenderTable