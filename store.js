import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mailSlice';
import userReducer from '../features/userSlice';
import starReducer from '../features/starSlice';
export default configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
    star: starReducer,
  },
});