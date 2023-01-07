import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

function Requests(
    name: name,
    messagecontent: text,
    answer: name,
  ) {
  return { name, messagecontent, answer };
}

const rows = [
    Requests('Benni Mayer', 'Hello, .... ', <CheckIcon fontSize="small" />,<ClearIcon fontSize="small" />),
    Requests('Helmut Lohberg', 'Hi, my name is...', <CheckIcon fontSize="small" />, <ClearIcon fontSize="small" />),
    Requests('Sebastian Schmidt', 'Hi....', <CheckIcon fontSize="small" />, <ClearIcon fontSize="small" /> ),
    Requests('Thomas Müller', 'yes...', <CheckIcon fontSize="small" />, <ClearIcon fontSize="small" />),
    Requests('Gerta Trumpf', 'Hey, i like...', <CheckIcon fontSize="small" />, <ClearIcon fontSize="small" />),
];

export default function DenseTable() {
  return (
    <>
    <Typography gutterBottom variant="h5" component="div">
         Requests
       </Typography>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Request </TableCell>
            <TableCell align='right'>Answer</TableCell>
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
              <TableCell align="right">{row.messagecontent}</TableCell>
              <TableCell align="right">{row.answer}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
