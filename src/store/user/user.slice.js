import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('user')?
JSON.parse(localStorage.getItem('user')) :
{email: "", token: "", id: ""}

export const userSlice = createSlice({
  name: UserActivation,
  initialState,
  reducers: {
    setUser: () =>{
      state.email = action.payload.email
      state.toekn = action.payload.token
      state.id = action.payload.id

      localStorage.setItem('user', JSON.stringify(state))
    },
    removeUser: (state) => {
      state.email = ""
      state.toekn = ""
      state.id = ""

      localStorage.setItem('user', JSON.stringify(state))
    }
  }
})

export const {setUser, removeUser} = userSlice.actions
export default userSlice.reducer
