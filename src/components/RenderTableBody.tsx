import { TableBody, TableCell, TableRow } from '@mui/material'
import React from 'react'

function RenderTableBody({ tableData }: { tableData: [] }) {
    return (
        <TableBody>
            {tableData.map((row) => {
                return (
                    <TableRow >
                        <TableCell>
                        </TableCell>
                    </TableRow>
                )
            })}
        </TableBody>
    )
}

export default RenderTableBody