import { TableHead, TableRow, TableCell, Typography } from '@mui/material';

function RenderTableHead({ labels }: { labels: string[] }) {
    return (
        <TableHead>
            <TableRow>
                {labels.map((label, index) => (
                    <TableCell key={index}>
                        <Typography fontWeight="bold">{label}</Typography>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

export default RenderTableHead;
