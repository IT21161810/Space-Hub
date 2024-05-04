import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../pages/LandPage.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';

const HomeCard = ({ title, img, description, path }) => {

  const nav = useNavigate()

  return (
    <>
      <div className='oneCard' style={{ textDecoration: 'none' }}>
          <Card sx={{ maxWidth: 240, height: 290 }} onClick={() => nav(path)}>
            <CardActionArea >
              <CardMedia
                component="img"
                image={img}
                height='150'
                alt={title}
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle2" sx={{fontWeight:700,marginBottom:'0.7rem'}}>
                  {title}
                </Typography>
                <Typography variant="caption">
                  {description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
      </div>
    </>
  );
}

export default HomeCard