import React, {useState} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actions/index';
import './city.scss';

const City = (props) => {
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleOnKeyPress = (event) => {
        if (event.charCode === 13) {
            setIsLoading(true);
            props.getWeather(props.id, name).finally(() => setIsLoading(false));
        }
    }

    const handleOnClick = () => {
        setIsLoading(true);
        props.getWeather(props.id, name).finally(() => setIsLoading(false));;
    }

    const allData = props.city ?
                    props.city.cod === 200 ?
                        <section className="data">
                            <ul>
                                <li key="name"><b>Name:</b> {props.city.name}</li>
                                <li key="temperature"><b>Temperature:</b> {props.city.main.temp} °C</li>
                                <li key="feels_like"><b>Feels like:</b> {props.city.main.feels_like} °C</li>
                                <li key="max"><b>Max:</b> {props.city.main.temp_max} °C</li>
                                <li key="min"><b>Min:</b> {props.city.main.temp_min} °C</li>
                                <li key="humidity"><b>Humidity:</b> {props.city.main.humidity} %</li>
                            </ul>
                        </section> :
                        <span>The city does not exist!</span>
                    : undefined;
                    
    const handleRemove = () => {
        props.removeCity(props.id);
        props.onRemove && props.onRemove(props.id);
    }

    return (
        <section className='cityBox'>
            <button className="btn btn-danger btnRemove" onClick={handleRemove}>X</button>
            <div className="input-group mb-3">
                <input className="form-control" placeholder="Enter city name" value={name} onKeyPress={handleOnKeyPress} onChange={(e) => setName(e.target.value)}></input>
                <div className="input-group-append">
                    <button className="btn btn-primary" onClick={handleOnClick}>Search</button>
                </div>
            </div>
            {isLoading ? 
                'Loading...' :
                allData
            }
        </section>
    )
};

const mapStateToProps = (state, ownProps) => {
    return {
        city: state.cities[ownProps.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getWeather: (id, name) => dispatch(actionCreators.getWeatherByCity(id, name)),
        removeCity: (id) => dispatch(actionCreators.removeCity(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(City);