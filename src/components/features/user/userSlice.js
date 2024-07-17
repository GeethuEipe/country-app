import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: { isLoggedIn: false },
  reducers: {
    login: state => {
      state.isLoggedIn = true
    }
  }
})

export const { login } = userSlice.actions
export default userSlice.reducer
