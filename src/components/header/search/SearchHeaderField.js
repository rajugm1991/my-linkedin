import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSearch } from "../../../utils/searchSlice";
import SearchResults from "./SearchResults";



const SearchHeaderField = () => {

    const [showSuggestion,setShowSuggestion]=useState(false);

    const [searchQuery,setSearchQuery]=useState('');

    const dispatch=useDispatch();

    const handleKeyPress=(e)=> {
      if (e.key === 'Enter') {
        // do whatever
        console.log(searchQuery)
        dispatch(updateSearch(searchQuery));
      }
    }

    return (
      <>
        <div className="">
          <input
            className="p-2 m-2  w-80 border border-gray-200 rounded-r-lg bg-gray-100"
            placeholder="🔍 Search"
            onFocus={()=>setShowSuggestion(true)}
            value={searchQuery}
          onBlur={()=>{setSearchQuery('');setShowSuggestion(false)}}
          onChange={(e)=>{setSearchQuery(e.currentTarget.value); setShowSuggestion(false)}}
          onKeyUp={(e)=>handleKeyPress(e)}
          />
          <SearchResults showSuggestion={showSuggestion} />
        </div>
      </>
    );
  };

  export default SearchHeaderField;