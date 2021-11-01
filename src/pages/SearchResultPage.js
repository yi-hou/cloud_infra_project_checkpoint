import React from 'react';
import { Typography, Button, Link, TableContainer, Table, TableBody, TableHead, TableCell, TableRow, Paper } from '@mui/material'

export const SearchResultPage = () => {
    function createData(Doc_ID, Doc_Folder, Doc_Name, Frenquencies) {
        return { Doc_ID, Doc_Folder, Doc_Name, Frenquencies };
    }
    const columns = [
        { id: 'Doc_ID', label: 'Doc\u00a0ID', minWidth: 170 },
        { id: 'Doc_Folder', label: 'Doc\u00a0Folder', minWidth: 100 },
        {
          id: 'Doc_Name',
          label: 'Doc\u00a0Name',
          minWidth: 170,
        },
        {
          id: 'Frenquencies',
          label: 'Frenquencies',
          minWidth: 170,
        },
      ];
    const rows = [
        createData(1, 'histories', '1kinghenryiv', 169),
        createData(2, 'histories', '1kinghenryiv', 160),
        createData(3, 'histories', '2kinghenryiv', 179),
        createData(4, 'histories', '2kinghenryiv', 340)
    ];

    return (
        <div>
            <Typography variant='h6'>
                You searched for the term: KING
            </Typography>
            <Typography variant='h6'>
                Your search was executed in XXX ms
            </Typography>

            <div>
                <Link href='/search' color='inherit'>
                    Go Back To Search
                </Link>
            </div>


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