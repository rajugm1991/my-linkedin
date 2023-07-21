import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_IMG, USERS } from "../mockData/userData";




const search=createSlice({
    name : 'search',
    initialState: {
        searchResults:USERS,
        showSearch: false,
    },
    reducers:{
        updateSearch:(state,action)=>{
            state.searchResults.unshift({
                name:action.payload,
                image:DEFAULT_IMG
            })
            state.searchResults.splice(5,1);
        },
        updateShowSearch:(state,action)=>{
            state.showSearch=action.payload;
        }

    }

})


export const {updateSearch,updateShowSearch}=search.actions;

export default search.reducer;