import React, { useState } from 'react'
import './home.scss'
import WeatherContainer from '../WeatherContainer/weatherContainer';
var UUID = require('uuid-js');


const Home = (props) => {
   const [listOfCities, setListOfCities] = useState([]);

   const addCity = () => {
      var newListOfCities = [...listOfCities];

      newListOfCities.push({id: UUID.create().toString()});

      setListOfCities(newListOfCities);
   }

   const removeCity = (id) => {
      var newListOfCities = listOfCities.filter((city) => city.id !== id);

      setListOfCities(newListOfCities);
   }

   return (
      <div className="home">
         <button onClick={addCity} className="btn btn-success addButton">Add</button>
         <WeatherContainer listOfCities={listOfCities} onRemove={removeCity}></WeatherContainer>
      </div>
   )
}

export default Home;
