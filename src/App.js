import React, { useState } from 'react'
import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData } from './api';


import Header from './components/header/Header';
import List from './components/list/List';
import Map from './components/map/Map';
import { useEffect } from 'react';


const App = () => {

  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [childClick, setChildClick] = useState(null)
  
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});


  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  // hello i am aniket kumar




  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, [])

  useEffect(() => {
    const filteredPlaces = places.filter((places) => places.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [places,rating]);

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);
      getPlacesData(type, bounds.sw, bounds.ne)
        .then((data) => {

          setPlaces(data?.filter((place) => place.name && place.num_reviews));
          setFilteredPlaces([]);
          setIsLoading(false);
        })
    }
  }, [type, bounds])

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClick={childClick}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
            isLoading={isLoading}

          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClick={setChildClick}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default App

