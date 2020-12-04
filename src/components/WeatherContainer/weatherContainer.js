import React from 'react';
import { connect } from 'react-redux';
import City from '../City/city';

import './weatherContainer.scss';

const WeatherContainer = (props) => {
    const {listOfCities, onRemove} = props;

    return (
        <section className='weatherContainer'>
           {listOfCities.map((city) => {
               return <City key={city.id} id={city.id} onRemove={onRemove}></City>
           })}
        </section>
    )
};

const mapStateToProps = (state) => {
    return {
        cities: state.cities
    }
}

export default connect(mapStateToProps)(WeatherContainer);