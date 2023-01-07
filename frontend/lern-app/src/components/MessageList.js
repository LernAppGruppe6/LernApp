import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';




function MessageList(
    name: name,
    status: name,
    messagecontent: text,
    priority: name,
    action: delete,
  ) {
  return { status, name, messagecontent, priority, action };
}

const rows = [
    MessageList('Lisa Müller', 'unread', 'Hello, .... ', 'high', <button onClick={(e) => this.deleteRow(e)}><DeleteIcon /></button>),
    MessageList('Bertha Meier', 'unread', 'Hi, my name is....', 'high',  <button onClick={(e) => this.deleteRow(e)}><DeleteIcon /></button>),
    MessageList('Hans Schneider', 'read', 'Hi....', 'normal',  <button onClick={(e) => this.deleteRow(e)}><DeleteIcon /></button>),
    MessageList('Peter Schmitt', 'read', 'yes...', 'normal',  <button onClick={(e) => this.deleteRow(e)}><DeleteIcon /></button>),
    MessageList('Gerta Trumpf', ' read', 'no...', 'low',  <button onClick={(e) => this.deleteRow(e)}><DeleteIcon /></button>),
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
            <TableCell align="right"></TableCell>            
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
              <TableCell align="right">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
