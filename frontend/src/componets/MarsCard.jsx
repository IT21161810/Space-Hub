import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const MarsCard = ({ img_src, fullName,cameraName,roverName,landingDate,launchingDate,status}) => {

  return (
    <Card sx={{ maxWidth: 295}}>
      <CardMedia
        component="img"
        height="170"
        image={img_src}
        alt="NASA"
      />
      <CardContent>
      <Typography gutterBottom variant="h6" >
          {fullName}
        </Typography>
       
        <Typography variant="body2" color="text.secondary">
            Camera Name: &nbsp;{cameraName}
        </Typography>
        <Typography variant='body2' color="text.secondary">
            Rover Name: &nbsp;{roverName}
        </Typography>
        <Typography variant='body2' color="text.secondary">
            Landing Date: &nbsp;{landingDate}
        </Typography>
        <Typography variant='body2' color="text.secondary">
          Launching Date: &nbsp;{launchingDate}
        </Typography>
        <Typography variant='body2' color="text.secondary">
          Status: &nbsp;{status}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MarsCard