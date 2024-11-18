import { TableBody, TableCell, TableRow } from '@mui/material'
import React from 'react'

function RenderTeacherTableBody({ tableData }: { tableData: any[] }) {

    return (
        <TableBody>
            {tableData.length === 0 ? (
                <TableRow>
                    <TableCell colSpan={8} align="center">No data available</TableCell>
                </TableRow>
            ) : (
                tableData.map((row: any, index) => {
                    return (
                        <TableRow key={row._id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{row.user.name}</TableCell>
                            <TableCell>{row.designation}</TableCell>
                            <TableCell>{row.faculty}</TableCell>
                            <TableCell>{row.officeLocation}</TableCell>
                            <TableCell>{row.courses.length > 0 ? row.courses.join(', ') : 'No courses'}</TableCell>
                        </TableRow>
                    )
                }
                )
            )}
        </TableBody>
    );
}

export default RenderTeacherTableBody;
