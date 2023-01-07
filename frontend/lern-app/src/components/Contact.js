import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please Enter your Message.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Message has been sent: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <>
    <Card style={{width: '75%', height: '40rem'}}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Contact 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <form onSubmit={this.handleSubmit}>
            <label>
             Name: 
             <input type="text" ></input><br />
            </label> <br />
            <label sx={{ minWidth: 650 }} size="small"> 
            Message: < br/>
            <textarea style={{width: '18rem', height: '20rem'}} value={this.state.value} onChange={this.handleChange} /><br />
            </label>  
            <input type="submit" value="Absenden" />
          </form>
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
      </Card>  
      </>
     
    );
  }
}
export default Contact


    
 
