import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Picture = ({ copyright, date, explanation, hdurl, title }) => {

  const [expanded, setExpanded] = React.useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 455 }}>
      <CardMedia
        sx={{ height: 290 }}
        component="img"
        height="200"
        image={hdurl}
        alt="Astronomy Picture of the day"
      />
      <CardContent sx={{ lineHeight: 10 }}>
        <Typography variant="h6" >
          Title: {title}
        </Typography>
        <Typography variant="body2" >
          Date: {date}
        </Typography>
        <Typography variant="body2" >
          Copyright: {copyright ? copyright : 'No Copyright'}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: '1rem' }}>
          Explanation: {expanded ? explanation : `${explanation.slice(0, 100)}...`}
          {/* Render "Show More" button if text is truncated */}
          {explanation.length > 100 && (
            <Button onClick={toggleExpanded} size="small" sx={{color:'#293d3d',fontFamily:'Arial'}}>
              {expanded ? 'Show Less' : 'Show More'}
            </Button>
          )}
          {/* Render icon button for toggling expanded state */}
          {explanation.length > 100 && (
            <IconButton size="small" onClick={toggleExpanded}>
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          )}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card>
  )
}

export default Picture
