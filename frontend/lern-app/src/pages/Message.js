import React from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";



class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }


  render() {
    return (
      <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }} maxWidth={false}>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 1, flexWrap: 'wrap' }}>
        </Box>
      </Container>
    );
  }
}

export default Message;