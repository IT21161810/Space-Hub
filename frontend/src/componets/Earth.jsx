import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Earth({ img_src, planet, date }) {
    const [expanded, setExpanded] = React.useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 1300 }}>
            <CardMedia
                sx={{ height: 600 }}
                image={img_src}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Planet: {planet}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {expanded ? (
                        <>
                            Landsat imagery is provided to the public as a joint project between NASA and USGS.
                            A recent industry report on landsat satellite imagery data estimates that total annual
                            value to the economy of $2.19 billion, far exceeding the multi-year total cost of
                            building, launching, and managing Landsat satellites and sensors. The value is derived 
                            from consumers use of the data. The objective of this endpoint is to give you an easy to 
                            use taste of what Landsat imagery data can provide. There are more complicated APIs available 
                            if you want to build models on top of satellite imagery, apply machine-learning, or minimize
                            clouds in your image. NASA's Earth Science Division has a variety of Earth imagery APIs for 
                            developers, which you can find out about in the Earthdata Developer Portal. Specifically, 
                            the GIBS (Global Imagery Browse Services) API may be of interest. The Google Earth Engine API is 
                            another powerful option. This API is powered by Google Earth Engine API, and currently only 
                            supports pan-sharpened Landsat 8 imagery.
                            {' '}
                            <Button color="primary" onClick={toggleExpanded}>
                                Show less
                            </Button>
                        </>
                    ) : (
                        <>
                            Landsat imagery is provided to the public as a joint project between NASA and USGS.
                            A recent industry report on landsat satellite imagery data estimates that total annual
                            value to the economy of $2.19 billion, far exceeding the multi-year total cost of
                            building, launching, and managing Landsat satellites and sensors. The value is derived 
                            from consumers use of the data. The objective of this endpoint is to give you an easy to 
                            use taste of what Landsat imagery data can provide.
                            {' '}
                            <Button color="primary" onClick={toggleExpanded}>
                                Show more
                            </Button>
                        </>
                    )}
                </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
    );
}
