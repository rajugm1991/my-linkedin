import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_IMG, USERS } from "../mockData/userData";




const search=createSlice({
    name : 'search',
    initialState: {
        searchResults:USERS
    },
    reducers:{
        updateSearch:(state,action)=>{
           
            state.searchResults.unshift({
                name:action.payload,
                image:DEFAULT_IMG
            })
            state.searchResults.splice(5,1);
            
        }

    }

})


export const {updateSearch}=search.actions;

export default search.reducer;