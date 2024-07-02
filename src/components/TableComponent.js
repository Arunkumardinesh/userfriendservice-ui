import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { IconButton } from '@mui/material';

import { Edit, Delete } from '@mui/icons-material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

import Button from './Button';

export default function TableComponent({ tableItems }) {
    const { row, columnNames } = tableItems;
    const headers = Object.keys(row[0]);

    return (
        <>
            <div style={{ margin: '10vh 20vw' }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {columnNames.map((column) => (
                                    <TableCell varient='head' align='center' component="th" scope="row" sx={{ width: '10px !important', backgroundColor: 'lightblue' }}>{column}</TableCell>
                                ))
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {row.map((r, i) => (
                                <TableRow
                                    key={i}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    {
                                        Object.keys(r).map((header) => (
                                            <TableCell varient='body' size='small' component='td' align='center' sx={{ backgroundColor: 'lightyellow' }}>{r[header]}</TableCell>
                                        ))
                                    }
                                    <TableCell align='center' size='small' sx={{ backgroundColor: 'lightyellow', width: '10px' }}>
                                        <IconButton>
                                            <VisibilityOutlinedIcon />
                                        </IconButton>
                                        <IconButton>
                                            <Edit />
                                        </IconButton>
                                        <IconButton>
                                            <Delete />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer >
            </div >
        </>
    );
}
