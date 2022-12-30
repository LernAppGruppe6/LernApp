import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Dashboard() {
  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Geburtstag:
          Alter:
          Universität:
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"> Edit</Button>
        <Button size="small"> Delete </Button>
      </CardActions>
    </Card>
    </>


  );
}
