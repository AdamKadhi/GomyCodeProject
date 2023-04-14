import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const userRegister = createAsyncThunk("user/register", async (user) => {
  try {
    let response = await axios.post(
      "http://localhost:5000/user/register",
      user
    );
    return await response;
  } catch (error) {
    console.log(error);
  }
});
export const userLogin = createAsyncThunk("user/login", async (user) => {
  try {
    let response = await axios.post("http://localhost:5000/user/login", user);
    return await response;
  } catch (error) {
    console.log(error);
  }
});
export const userCurrent = createAsyncThunk("user/current", async () => {
  try {
    let response = await axios.get("http://localhost:5000/user/current", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return await response;
  } catch (error) {
    console.log(error);
  }
});
export const updateuser=createAsyncThunk('user/update',async({id, user})=>{
  try{
let result=axios.put(`http://localhost:5000/user/${id}`,user)
return result
  }catch(error){
  console.log(error)
  }
})
export const getuser=createAsyncThunk('user/get',async()=>{
  try{
let result=axios.get('http://localhost:5000/user/all')
return result
  }catch(error){
  console.log(error)
  }
})

const initialState = {
  user: null,
  status: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [userRegister.pending]: (state) => {
      state.status = "pending";
    },
    [userRegister.fulfilled]: (state, action) => {
      state.status = "succcessssss";
      state.user = action.payload?.data?.newUserToken;
      localStorage.setItem("token", action.payload?.data?.token);
    },
    [userRegister.rejected]: (state) => {
      state.status = "fail";
    },
    [userLogin.pending]: (state) => {
      state.status = "pending";
    },
    [userLogin.fulfilled]: (state, action) => {
      state.status = "sucess";
      state.user = action.payload?.data?.user;
      localStorage.setItem("token", action.payload?.data?.token);
    },
    [userLogin.rejected]: (state) => {
      state.status = "fail";
    },
    [userCurrent.pending]: (state) => {
      state.status = "pending";
    },
    [userCurrent.fulfilled]: (state, action) => {
      state.status = "succcessssss";
      state.user = action.payload?.data?.user;
    },
    [userCurrent.rejected]: (state) => {
      state.status = "fail";
    },
    [updateuser.pending]: (state) => {
      state.status = "pending";
    },
    [updateuser.fulfilled]: (state, action) => {
      state.status = "update succcessssss";
      state.user = action.payload?.data?.user;
    },
    [updateuser.rejected]: (state) => {
      state.status = "fail update";
    },
    [getuser.pending]: (state) => {
      state.status = "pending ";
    },
    [getuser.fulfilled]: (state, action) => {
      state.status = "succcessssss";
      state.user = action.payload?.data?.user;
    },
    [getuser.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions;

export default userSlice.reducer;
