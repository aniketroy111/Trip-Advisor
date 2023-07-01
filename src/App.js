import React, { useState } from 'react'
import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData } from './api';


import Header from './components/header/Header';
import List from './components/list/List';
import Map from './components/map/Map';
import { useEffect } from 'react';


const App = () => {

  const [places,setPlaces] = useState([0]);

  const [coordinates,setCoordinates] = useState({});
  const [bounds,setBounds] = useState(null);

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
      setCoordinates({lat:latitude,lng:longitude});
    })
  },[])

  useEffect(()=>{
    console.log(coordinates,bounds);
    getPlacesData(bounds?.sw,bounds?.ne)
    .then((data)=>{
      console.log(data);
      setPlaces(data)
    })
  },[coordinates,bounds])

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default App

