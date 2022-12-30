import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Profile() {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          NAME 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Alter:  Jahre 
          Geburtstag: tt.mm.jjjj
          Universität: Hochschule der Medien Stuttgart

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small"> Edit</Button>
      </CardActions>
    </Card>
  );

}

