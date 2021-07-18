import { configureStore } from '@reduxjs/toolkit'
import balanceReducer from '../components/balance/balanceSlice'



export default configureStore({
  reducer: {
      balanceReducer
  }
})