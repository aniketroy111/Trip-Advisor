import React from 'react'
import {AppBar,Toolbar,InputBase,Box,Typography} from '@material-ui/core';
import {AutoComlete} from '@react-google-maps/api';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles'
const Header = () => {
    const classes = useStyles();

  return (
    <AppBar style={{position:'static'}}>
        <Toolbar className={classes.toolbar}>
            <Typography className={classes.title} variant='h5'>Trip Adviser</Typography>
            <Box style={{display:'flex'}}>
                <Typography variant="h6" className={classes.title} >Explore new places</Typography>
                {/* <AutoComlete> */}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase placeholder="Search ..."  classes={{root:classes.inputRoot,input:classes.inputInput}}/>
                    </div>
                {/* </AutoComlete> */}
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header
