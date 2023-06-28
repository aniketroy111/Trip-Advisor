import React from 'react'
import { CircularProgress,Grid,Typography,InputLabel,MenuItem,FormControl,Select } from '@material-ui/core'
import { useState } from 'react'
import useStyles from './styles'
import PlaceDetails from '../placeDetails/PlaceDetails'

const places = [
  {name:'Cool Place'},
  {name:'Best Beer'},
  {name:'Best Steak'},
  {name:'Best Steak'},
  {name:'Best Steak'},
  {name:'Best Steak'},
  {name:'Best Steak'},
  {name:'Best Steak'},
];

const List = () => {

  const [type,setType] = useState('restaurants');
  const [rating,setRating] = useState('');

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h5"> Restaurants,Hotels and Attractive places around you</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e)=>setType(e.target.value)}>
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="Places">Places</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>Above 3.0</MenuItem>
            <MenuItem value={4}>Above 4.0</MenuItem>
            <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} className={classes.list}>
            {places.map((place,i)=>(
              <>
                <Grid item key={i} xs={12}>
                    <PlaceDetails place={place} />
                </Grid>
              </>
            ))}
      </Grid>
    </div>
  )
}

export default List
