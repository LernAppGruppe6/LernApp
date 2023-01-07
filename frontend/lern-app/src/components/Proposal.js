import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import MessageIcon from '@mui/icons-material/Message';

function Proposal(
    name: name,
    subject: text,
    similarities: text,
    answer: name,
  ) {
  return { name, subject, similarities, answer };
}

const rows = [
    Proposal('Hans Maler', 'Sopra' , '70%', <Button  size="small"><MessageIcon /></Button>),
    Proposal('Henrik Bauer', 'Webtec', '90%', <Button size="small"><MessageIcon /></Button>),
    Proposal('Thorsten Schneider', 'Data Science', '60%',<Button size="small"><MessageIcon /></Button>),
    Proposal('Hennry Schröder', 'Business Intelligence', '75%', <Button size="small"><MessageIcon /></Button> ),
    Proposal('Bernd Wolf', 'Sopra', '80%',<Button size="small"><MessageIcon /></Button>),
];

export default function DenseTable() {
  return (
    <>
    <Typography gutterBottom variant="h5" component="div">
         Proposal
       </Typography>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Subject </TableCell>
            <TableCell align='right'>Similarities</TableCell>
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
              <TableCell align="right">{row.subject}</TableCell>
              <TableCell align="right">{row.similarities}</TableCell>
              <TableCell align="right">{row.answer}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
