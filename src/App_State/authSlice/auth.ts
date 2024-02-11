import {createSlice} from '@reduxjs/toolkit'
interface AuthId{
  userId: string
}
const initialState = {
  userId: null,
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers:{


  }
})