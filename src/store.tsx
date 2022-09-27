import { configureStore } from '@reduxjs/toolkit'
import materialReducer from './reducers/materialReducer';

const store = configureStore({
    reducer: {
        material:materialReducer
    }
})


export default store;