import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';



export default function Message() {
  return (
    <>
      <MenuList>
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
         <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
         <nav aria-label="main mailbox folders">
           <List>
             <ListItem disablePadding>
               <ListItemButton>
                 <ListItemIcon>
                   <InboxIcon />
                 </ListItemIcon>
                 <ListItemText primary="Inbox" />
               </ListItemButton>
             </ListItem>
             <ListItem disablePadding>
                 <ListItemIcon>
                 </ListItemIcon>
             </ListItem>
           </List>
         </nav>
         <Divider />
         <nav aria-label="secondary mailbox folders">
           <List>
             <ListItem disablePadding>
               <ListItemButton>
               </ListItemButton>
             </ListItem>
             <ListItem disablePadding>
               <ListItemButton component="a" href="#simple-list">
               </ListItemButton>
             </ListItem>
           </List>
         </nav>
       </Box>
       </>
  );
}


