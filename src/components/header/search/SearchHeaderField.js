import { useState } from "react";
import SearchResults from "./SearchResults";



const SearchHeaderField = () => {

    const [showSuggestion,setShowSuggestion]=useState(false);

    return (
      <>
        <div className="">
          <input
            className="p-2 m-2  w-80 border border-gray-200 rounded-r-lg bg-gray-100"
            placeholder="🔍 Search"
            onFocus={()=>setShowSuggestion(true)}
          onBlur={()=>setShowSuggestion(false)}
          />
          <SearchResults showSuggestion={showSuggestion} />
        </div>
      </>
    );
  };

  export default SearchHeaderField;