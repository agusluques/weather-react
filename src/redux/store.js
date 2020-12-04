import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './root-reducer';
import apiMiddleware from '../middlewares/api-middleware';

const store = createStore(
    RootReducer,
    composeWithDevTools(
        applyMiddleware(
            apiMiddleware
        )
    )
)

export default store
