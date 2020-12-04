import { combineReducers } from 'redux'
import weatherReducer from './reducers/weatherReducer';

const RootReducer = combineReducers({
   cities: weatherReducer,
})

export default RootReducer
