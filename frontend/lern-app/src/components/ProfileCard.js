import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';

export default function ProfileCard() {

  return (
    <>
    <Card style={{ width: '50%', height: '35rem', float: 'left' }}>
      
      <CardContent>
      <Button  size="small"><AddPhotoAlternateIcon style={{ width: '15rem', height: '20rem' }}/></Button>
        <Typography gutterBottom variant="h5" component="div">
        generally 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <form>
            <label>
             age: 
              <input type="text" ></input><br />
            </label>
            <label>
            mail:
            <input type="text" ></input><br />
            </label>
            <label>
            semester:
            <input type="text" ></input><br />
            </label>
            <label>
            university:
            <input type="text" ></input><br />
            </label>
          </form>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><EditIcon /></Button>
        <Button size="small"> <SaveIcon /> </Button>
      </CardActions>
      </Card>  
      <Card style={{ width: '50%', height: '35rem', float: 'right'}}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        learning preferences
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <form>
            <label>
            learning type: 
              <input type="text" ></input><br />
            </label>
            <label>
            time:
            <input type="text" ></input><br />
            </label>
            <label>
            frequency:
            <input type="text" ></input><br />
            </label>
            <label>
            group_size:
            <input type="text" ></input><br />
            </label>
            <label>
            place of learning:
            <input type="text" ></input><br />
            </label>
            <label>
            prior knowledge:
            <input type="text" ></input><br />
            </label>
            <label>
            extroversion:
            <input type="text" ></input><br />
            </label>
          </form>
  
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">< EditIcon /></Button>
        <Button size="small"> < SaveIcon /></Button>
      </CardActions>
      </Card>  
      </>
  
    
  );

}


    
 
