import { combineReducers } from 'redux';
import counterReducer from './Counter/counterReducer';
// import productReducer from './productReducer';

const rootReducers = combineReducers({
    countValue : counterReducer
    // product: productReducer,
    // Add other reducers here
});

export default rootReducers;
