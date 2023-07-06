import { useSelector } from "react-redux";
import RecentSearch from "./RecentSearch";

const SearchResults = ({showSuggestion}) => {


    return (
        showSuggestion && <div className="fixed bg-white h-auto m-1 w-[24rem] rounded-lg shadow-lg border border-gray-100">
       <RecentSearch/>
        <div className="space-y-2">
        <h1 className="text-sm font-semibold text-left m-2">Try Searching for</h1>
        <ul className="flex flex-row">
            <li className="m-1"> 🔍    Jobs </li>
        </ul>
            
        </div>
      </div>
    );
  };

  export default SearchResults;