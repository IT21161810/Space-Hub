import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const Picture = ({copyright,date,explanation,hdurl,title}) => {
  return (
    <Card sx={{ maxWidth: 455 }}>
    <CardMedia
    sx={{height:290}}
      component="img"
      height="200"
      image={hdurl}
      alt="Astronomy Picture of the day"
    />
    <CardContent sx={{lineHeight: 10}}>
      <Typography variant="h6" >
        Title: {title}
      </Typography>
      <Typography variant="body2" >
        Date: {date}
      </Typography>
      <Typography variant="body2" >
        Copyright: {copyright ? copyright : 'No Copyright'}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{marginTop:'1rem'}}>
        Explanation: {explanation}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
    </CardActions>
  </Card>
  )
}

export default Picture
