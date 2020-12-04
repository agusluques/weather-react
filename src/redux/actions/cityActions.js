import * as actionsTypes from './actionTypes';

export const getWeatherByCity = (id, name) => {
    return {
        type: actionsTypes.GET_WEATHER_BY_CITY,
        id: id,
        meta: {
            api: {
                method: 'GET',
                url: 'weather',
                params: {q: `${name}`}
            }
        }
    }
}


export const removeCity = (id) => {
    return {
        type: actionsTypes.REMOVE_CITY_BY_ID,
        id: id
    }
}