import { TableBody, TableCell, TableRow } from '@mui/material'
import React from 'react'

function RenderClassesTableBody({ tableData }: { tableData: any[] }) {

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
                            <TableCell>{row.courseName}</TableCell>
                            <TableCell>{row.courseId}</TableCell>
                            <TableCell>{row.teacher?.name}</TableCell>
                            <TableCell>{row.students.length > 0 ? row.students.join(' | ') : 'No students'}</TableCell>
                        </TableRow>
                    )
                }
                )
            )}
        </TableBody>
    );
}

export default RenderClassesTableBody;
