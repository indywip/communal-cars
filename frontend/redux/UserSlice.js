import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userId: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserId: (state, action) => {
      state.userId = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateUserId } = userSlice.actions

export default userSlice.reducer