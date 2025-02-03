import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import feedReducer from './feedSlice';
import connectionRedcer from './connectionSlice'

const appStore = configureStore({
   reducer:{
    user:userReducer,
    feed:feedReducer,
    connection:connectionRedcer
   }
});

export default appStore;