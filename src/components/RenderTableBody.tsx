import { TableBody, TableCell, TableRow } from '@mui/material'
import React from 'react'

function RenderTableBody({ tableData, labels }: { tableData: any[], labels: string[] }) {
    console.log("Table Data:", tableData); // Debugging
    console.log("Labels:", labels); // Debugging

    return (
        <TableBody>
            {tableData.length === 0 ? (
                <TableRow>
                    <TableCell colSpan={labels.length} align="center">No data available</TableCell>
                </TableRow>
            ) : (
                tableData.map((row, index) => (
                    <TableRow key={index}>
                        {labels.map((label, labelIndex) => {
                            let value;

                            if (label === 'Name') {
                                value = row.user?.name;
                            } else if (label === 'Email') {
                                value = row.user?.email;
                            }
                            else if (label === '#') {
                                value = index + 1;
                            }
                            else {
                                value = row[label.toLowerCase()] || '';
                            }

                            return (
                                <TableCell key={labelIndex}>
                                    {value || '-'}  {/* empty value*/}
                                </TableCell>
                            )
                        })}
                    </TableRow>
                ))
            )}
        </TableBody>
    );
}

export default RenderTableBody;
