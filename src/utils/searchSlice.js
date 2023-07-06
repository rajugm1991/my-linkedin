import { createSlice } from "@reduxjs/toolkit";
import { USERS } from "../mockData/userData";




const search=createSlice({
    name : 'search',
    initialState: {
        searchResults:USERS
    },
    reducers:{
        updateSearch:(state,payload)=>{

        }

    }

})


const {updateSearch}=search.actions;

export default search.reducer;