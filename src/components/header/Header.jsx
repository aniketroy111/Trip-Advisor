import React, { useState } from 'react'
import {AppBar,Toolbar,InputBase,Box,Typography} from '@material-ui/core';
import {Autocomplete} from '@react-google-maps/api';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles'
const Header = ({setCoordinates}) => {
    const classes = useStyles();
    const [autocomplete , setAutocomplete] = useState(null);

    const onLoad = (autoC) => setAutocomplete(autoC);
    
    const onPlaceChanged =()=>{
        const lat = autocomplete?.getPlace()?.geometry?.location?.lat();
        const lng = autocomplete?.getPlace()?.geometry?.location?.lng();

        setCoordinates({lat,lng})
    }

  return (
    <AppBar style={{position:'static'}}>
        <Toolbar className={classes.toolbar}>
            <Typography className={classes.title} variant='h5'>Trip Advisor</Typography>
            <Box style={{display:'flex'}}>
                <Typography variant="h6" className={classes.title} >Search your place</Typography>
                <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase placeholder="Search ..."  classes={{root:classes.inputRoot,input:classes.inputInput}}/>
                    </div>
                </Autocomplete>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header
