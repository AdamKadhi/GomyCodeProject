import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const gettournoi=createAsyncThunk('tournoi/get',async()=>{
    try{
let result=axios.get('http://localhost:5000/tournoi/all')
return result
    }catch(error){
    console.log(error)
    }
})
export const getbyidtournoi=createAsyncThunk('tournoibyid/get',async(id)=>{
    try{
let result=axios.get(`http://localhost:5000/tournoi/${id}`)
return result
    }catch(error){
    console.log(error)
    }
})

export const addtournoi=createAsyncThunk('tournoi/add',async(tournoi)=>{
    try{
let result=axios.post('http://localhost:5000/tournoi/add',tournoi)
return result
    }catch(error){
    console.log(error)
    }
})
export const deletetournoi=createAsyncThunk('tournoi/delete',async(id)=>{
    try{
let result=axios.delete(`http://localhost:5000/tournoi/${id}`)
return result
    }catch(error){
    console.log(error)
    }
})

export const updatetournoi=createAsyncThunk('tournoi/update',async({id, tournoi})=>{
    try{
let result=axios.put(`http://localhost:5000/tournoi/${id}`,tournoi)
return result
    }catch(error){
    console.log(error)
    }
})


// export const updatepartie=createAsyncThunk('partie/update',async({id, partie})=>{
//     try{
// let result=axios.put(`http://localhost:5000/tournoi/partie/${id}`,partie)
// return result
//     }catch(error){
//     console.log(error)
//     }
// })
// export const updateparticipant=createAsyncThunk('participant/update',async({id, participant})=>{
//     try{
// let result=axios.put(`http://localhost:5000/tournoi/participant/${id}`,participant)
// return result
//     }catch(error){
//     console.log(error)
//     }
// })



const initialState = {
 tournoi:null,
 status:null
}

export const tournoiSlice = createSlice({
  name: 'tournoi',
  initialState,
  reducers: {},
  extraReducers:{
    [gettournoi.pending]:(state)=>{
        state.status="pending";
    },
    [gettournoi.fulfilled]:(state,action)=>{
        state.status="success";
        state.tournoi=action.payload.data?.tournoi
    },
    [gettournoi.rejected]:(state,action)=>{
        state.status="failed";
    },
    [getbyidtournoi.pending]:(state)=>{
        state.status="pending";
    },
    [getbyidtournoi.fulfilled]:(state,action)=>{
        state.status="success";
        state.tournoi=action.payload.data?.tournoi
    },
    [getbyidtournoi.rejected]:(state,action)=>{
        state.status="failed";
    },
    [addtournoi.pending]:(state)=>{
        state.status="pending";
    },
    [addtournoi.fulfilled]:(state,action)=>{
        state.status="success";
    },
    [addtournoi.rejected]:(state,action)=>{
        state.status="failed";
    },
    [deletetournoi.pending]:(state)=>{
        state.status="pending";
    },
    [deletetournoi.fulfilled]:(state,action)=>{
        state.status="success";
    },
    [deletetournoi.rejected]:(state,action)=>{
        state.status="failed";
    },
    [updatetournoi.pending]:(state)=>{
        state.status="pending";
    },
    [updatetournoi.fulfilled]:(state,action)=>{
        state.status="success";
        state.tournoi=action.payload.data?.tournoi
    },
    [updatetournoi.rejected]:(state,action)=>{
        state.status="failed";
    }

  }
})
// Action creators are generated for each case reducer function
export const {t} = tournoiSlice.actions

export default tournoiSlice.reducer