import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
import Button from '@mui/material/Button';


const headCells = [
    {
        id: 'subject',
        numeric: false,
        disablePadding: true,
        label: 'Subject',
    },
    {
        id: 'max group_member',
        numeric: false,
        disablePadding: true,
        label: 'Max Groupmember',
    },
    {
        id: 'group chat',
        numeric: false,
        disablePadding: true,
        label: 'Group Chat',
    },
    {
        id: 'place_learning',
        numeric: false,
        disablePadding: true,
        label: 'Place of Learning',
    },
    {
        id: 'groupmembers',
        numeric: false,
        disablePadding: true,
        label: 'GroupMembers',
    },
];

export default function LearnGroupList(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        event.preventDefault();
        onRequestSort(event, property);
    };

  return (
    <>

    <Button variant="outlined">+ New Learngroup</Button>
    
    <TableHead>
      <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              >
            </Checkbox>
          </TableCell>
          {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align='left'
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}>
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
                sx={{fontWeight: "bold"}}>
                  {headCell.label}
                  {orderBy === headCell.id ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </Box>
                  ) : null}
              </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
    </>
  );
}

LearnGroupList.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};




