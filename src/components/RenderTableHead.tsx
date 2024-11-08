import { TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

function RenderTableHead({ labels }: { labels: string[] }) {
    return (
        <TableHead>
            <TableRow>
                {labels.map((label) => {
                    return (
                        <TableCell>
                            <Typography fontWeight={'bold'}>
                                {label}
                            </Typography>
                        </TableCell>
                    )
                })}

            </TableRow>
        </TableHead>
    )
}

export default RenderTableHead