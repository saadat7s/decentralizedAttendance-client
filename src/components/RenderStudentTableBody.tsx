import { TableBody, TableCell, TableRow } from '@mui/material'
import React from 'react'

function RenderStudentTableBody({ tableData }: { tableData: any[] }) {

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
                            <TableCell>{row.rollNumber}</TableCell>
                            <TableCell>{row.department}</TableCell>
                            <TableCell>{row.semester}</TableCell>
                            <TableCell>{row.program}</TableCell>
                            <TableCell>{row.batch}</TableCell>
                            <TableCell>{row.courses.length > 0 ? row.courses.join(', ') : 'No courses'}</TableCell>
                        </TableRow>
                    )
                }
                )
            )}
        </TableBody>
    );
}

export default RenderStudentTableBody;
