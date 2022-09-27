import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './reducers/filterReducer';
import materialReducer from './reducers/materialReducer';

const store = configureStore({
    reducer: {
        material: materialReducer,
        filterMaterial: filterReducer
    }
})


export default store;