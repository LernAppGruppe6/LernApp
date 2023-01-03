import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

function ContactList(
    name: name,
    commonsubject: number,
    semester: number,
    similarities: number,
    university: name,
  ) {
  return { name, commonsubject, semester, similarities, university };
}

const rows = [
  ContactList('Lisa Müller', 'Sopra', 6, 2, 'Hochschule der Medien'),
  ContactList('Bertha Meier', 'UXD', 4, 3, 'Hochschule der Medien'),
  ContactList('Hans Schneider', 'Webtechnology', 3, 2, 'Universität Stuttgart'),
  ContactList('Peter Schmitt', 'Data Science', 5, 1.0, 'Hochschule der Medien'),
  ContactList('Gerta Trumpf', 'Software Engineering', 4, 2, 'Hochschule der Medien'),
];

export default function DenseTable() {
  return (
    <>
    <Typography gutterBottom variant="h5" component="div">
       networked contacts
       </Typography>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Common Subject</TableCell>
            <TableCell align="right">Semester</TableCell>
            <TableCell align="right">Similarities</TableCell>
            <TableCell align="right">University</TableCell>
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
              <TableCell align="right">{row.commonsubject}</TableCell>
              <TableCell align="right">{row.semester}</TableCell>
              <TableCell align="right">{row.similarities}</TableCell>
              <TableCell align="right">{row.university}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
