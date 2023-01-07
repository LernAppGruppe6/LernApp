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
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';

class Request extends React.Component {
  handleClick(){
    console.log('this is:', this);
  }
  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}

function Requests(
    name: name,
    messagecontent: text,
    answer: name,

  ) {
  return { name, messagecontent, answer };
}


const rows = [
  
  Requests('Benni Mayer', 'Hello, .... ', <Button onClick={() => this.handleClick()}><CheckIcon fontSize="small" /></Button>,<Button size="small"><ClearIcon fontSize="small" /></Button>),
  Requests('Helmut Lohberg', 'Hi, my name is...', <Button onClick={() => this.handleClick()}><CheckIcon fontSize="small" /></Button>,<Button size="small"><ClearIcon fontSize="small" /></Button>),
  Requests('Sebastian Schmidt', 'Hi....', <Button onClick={() => this.handleClick()}><CheckIcon fontSize="small" /></Button>,<Button size="small"><ClearIcon fontSize="small" /></Button>),
  Requests('Thomas Müller', 'yes...',<Button onClick={() => this.handleClick()}><CheckIcon fontSize="small" /></Button>,<Button size="small"><ClearIcon fontSize="small" /></Button>),
  Requests('Gerta Trumpf', 'Hey, i like...',<Button onClick={() => this.handleClick()}><CheckIcon fontSize="small" /></Button>,<Button size="small"><ClearIcon fontSize="small" /></Button>),
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
