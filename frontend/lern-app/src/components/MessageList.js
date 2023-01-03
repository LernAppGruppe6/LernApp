import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

function MessageList(
    name: name,
    status: name,
    messagecontent: text,
    priority: name,
  ) {
  return { status, name, messagecontent, priority };
}

const rows = [
    MessageList('Lisa Müller', 'unread', 'Hello, .... ', 'high'),
    MessageList('Bertha Meier', 'unread', 'Hi, my name is....', 'high'),
    MessageList('Hans Schneider', 'read', 'Hi....', 'normal'),
    MessageList('Peter Schmitt', 'read', 'yes...', 'normal'),
    MessageList('Gerta Trumpf', ' read', 'no...', 'low'),
];

export default function DenseTable() {
  return (
    <>
    <Typography gutterBottom variant="h5" component="div">
        All Messages
       </Typography>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Status </TableCell>
            <TableCell align="right">Message Content</TableCell>
            <TableCell align="right">Priority</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.messagecontent}</TableCell>
              <TableCell align="right">{row.priority}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
