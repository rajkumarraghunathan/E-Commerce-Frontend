import productReducer from '../Reducer/Reducer'
import { createStore } from 'redux';


const store = createStore(productReducer);

export default store;