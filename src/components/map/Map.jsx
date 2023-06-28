import React from 'react'
import { Paper,Typography,useMediaQuery} from '@material-ui/core'
import GoogleMapReact from 'google-map-react';
import LocationOnOutLinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';


const Map = () => {

  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');
  const coordinates = {lat:30,lng:80};

  

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key:'AIzaSyBoya4K4eSxlUaDzCzBtm5ih-zFnWEqZbk'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={''}
        onChange={''}
        onChildClick={''}
      >

      </GoogleMapReact>
    </div>
  )
}

export default Map
