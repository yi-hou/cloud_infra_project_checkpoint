import React from 'react';
import { Typography, Link, TableContainer, Table, TableBody, TableHead, TableCell, TableRow } from '@mui/material'

export const TopNResultPage = () => {
    function createData(Term, Total_Frequencies) {
        return { Term, Total_Frequencies };
    }
    const columns = [
        { id: 'Term', label: 'Term', minWidth: 170 },
        { id: 'Total_Frenquencies', label: 'Total\u00a0Frequencies', minWidth: 170 },
      ];
    const rows = [
        createData('King', 5000),
        createData('HENRY', 4500),
        createData('THE', 4000),
        createData('FOURTH', 3500),
    ];

    return (
        <div>
            <div>
                <Link href='/search' color='inherit'>
                    Go Back To Search
                </Link>
            </div>
            <Typography variant='h6'>
                Top-N Frequent Terms
            </Typography>


            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>


        </div >
    )

}