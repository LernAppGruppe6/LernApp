import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export default function Profile() {

  return (
    <>
    <Card sx={{ maxWidth: 350, float: 'left',}}>
      
      <CardContent>
        <AddPhotoAlternateIcon orientation="top" class="fa-solid fa-camera fa-4x">
        </AddPhotoAlternateIcon>
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
        <Button size="small">Edit</Button>
        <Button size="small"> Delete</Button>
      </CardActions>
      </Card>  
      <Card sx={{ maxWidth: 350, float: 'left' }}>
     
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
        <Button size="small">Edit</Button>
        <Button size="small"> Delete</Button>
      </CardActions>
      </Card>  
      <Card sx={{ maxWidth: 350, float: 'left' }}>
     
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
       networked contacts
       </Typography>
       <Typography variant="body2" color="text.secondary">
      <table>
<tr>
    <th>Name</th>
    <th>common subject</th>
    <th>similarities</th>
</tr>
<tr><td>Lisa Müller</td><td>Software-Engineering</td><td>2</td></tr> <tr><td>Berta Schmitt</td><td>Data-Sciemce</td><td>1.5</td></tr> 
</table>
       </Typography>
     </CardContent>
     <CardActions>
       <Button size="small">show More Friends</Button>
     </CardActions>
     </Card>  
    </>
  
    
  );

}


    
 
