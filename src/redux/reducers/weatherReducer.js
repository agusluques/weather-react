import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cities: []
};

const weatherReducer = (state = initialState.cities, action) => {
    switch (action.type) {
        case actionTypes.GET_WEATHER_BY_CITY:
            return {
                ...state,
                [action.id]: action.error ? action.error.response.data : action.response.data
            }
        case actionTypes.REMOVE_CITY_BY_ID:
            var newState = {...state}
            delete newState[action.id]
            return newState
        default:
            return state;
    }
}

export default weatherReducer;