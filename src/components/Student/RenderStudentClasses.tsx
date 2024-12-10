import { TableBody, TableCell, TableRow } from '@mui/material';
import React from 'react'

function RenderStudentClasses({ tableData }: { tableData: any[] }) {
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
                            <TableCell>{row.courseId}</TableCell>
                            <TableCell>{row.teacher.name}</TableCell>
                        </TableRow>
                    )
                }
                )
            )}
        </TableBody>
    );
}

export default RenderStudentClasses