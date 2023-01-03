import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import MessageIcon from '@mui/icons-material/Message';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';



export default function HeaderMessage() {
  return (
    <>
    
      <MenuList>
      <MenuItem>
          <ListItemIcon>
            <MessageIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">new messages</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">sent messages</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PriorityHighIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">highest priority </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
          read messages
          </Typography>
        </MenuItem>
      </MenuList>

       </>
  );
}


