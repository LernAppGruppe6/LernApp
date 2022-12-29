import React from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }} maxWidth={false}>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 1, flexWrap: 'wrap' }}>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 1, flexWrap: 'wrap' }} >
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginLeft: 2 }}>
          </Box>
        </Box>
      </Container>
    );
  }
}