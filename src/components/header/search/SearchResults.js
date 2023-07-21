import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import RecentSearch from "./RecentSearch";

const SearchResults = () => {

  const showSuggestion=useSelector(store=>store.search.showSearch);

  const navigate=useNavigate();

    return (
        showSuggestion && <div className="fixed bg-white h-auto m-1 w-[24rem] rounded-lg shadow-lg border border-gray-100">
       <RecentSearch/>
        <div className="space-y-2">
        <h1 className="text-sm font-semibold text-left m-2">Try Searching for</h1>
        <ul className="flex flex-col text-left space-x-4 space-y-6">
           <Link onMouseDown={()=>navigate('/profile/?name=jobs')}> <li >🔍 Jobssdadas </li></Link>
           <Link onMouseDown={()=>navigate('/profile/?name=intervew')}>   <li >🔍 Inteview </li></Link>
           <Link onMouseDown={()=>navigate('/profile/?name=career')}> <li >🔍 Career advice </li></Link>
        </ul>
            
        </div>
      </div>
    );
  };

  export default SearchResults;