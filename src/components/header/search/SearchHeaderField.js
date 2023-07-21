import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateSearch, updateShowSearch } from "../../../utils/searchSlice";
import SearchResults from "./SearchResults";



const SearchHeaderField = () => {

    const [searchQuery,setSearchQuery]=useState('');

    const dispatch=useDispatch();

    let navigate = useNavigate();

    const handleKeyPress=(e)=> {
      if (e.key === 'Enter') {
        // do whatever
        console.log(searchQuery)
        dispatch(updateSearch(searchQuery));
        navigate(`/profile?name=`+searchQuery);
      }
    }

    const handleShowSearch=(val)=>{
      dispatch(updateShowSearch(val));
    }

    return (
      <>
        <div className="">
          <input
            className="p-2 m-2  w-80 border border-gray-200 rounded-r-lg bg-gray-100"
            placeholder="🔍 Search"
            onFocus={()=>handleShowSearch(true)}
            value={searchQuery}
          onBlur={()=>{setSearchQuery('');handleShowSearch(false)}}
          onChange={(e)=>{setSearchQuery(e.currentTarget.value); handleShowSearch(false)}}
          onKeyUp={(e)=>handleKeyPress(e)}
          />
          <SearchResults />
        </div>
      </>
    );
  };

  export default SearchHeaderField;