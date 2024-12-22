import { TableBody, TableCell, TableRow } from '@mui/material';
import React from 'react';

function RenderSessionsTableBody({ tableData }: { tableData: any[] | undefined }) {
    if (!tableData || tableData.length === 0) {
        return (
            <TableBody>
                <TableRow>
                    <TableCell colSpan={6} align="center">No sessions available</TableCell>
                </TableRow>
            </TableBody>
        );
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <TableBody>
            {tableData.map((session, index) => (
                <TableRow key={session.id || index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{session.className || 'N/A'}</TableCell>
                    <TableCell>{session.sessionName}</TableCell>
                    <TableCell>{formatDate(session.date)}</TableCell>
                    {/* <TableCell>{session.startTime}</TableCell>
                    <TableCell>{session.endTime}</TableCell> */}
                </TableRow>
            ))}
        </TableBody>
    );
}

export default RenderSessionsTableBody;
