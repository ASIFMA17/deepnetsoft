import { configureStore } from "@reduxjs/toolkit";
import iteamSlice from './iteamSlice';

const store = configureStore({
    reducer:{
        iteams: iteamSlice ,
    }

});


export default store;