import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { updateSearch } from "../../../utils/searchSlice";
import ProfileCard from "./ProfileCard";

const RecentSearch = () => {
  const results = useSelector((store) => store.search.searchResults);
  const navigate=useNavigate();

  const dispatch=useDispatch();
  return (
    <div>
      <h1 className="text-sm font-semibold text-left m-3">Recent</h1>
      <ul className="flex flex-row m-2     space-x-6  ">
        {results.map((x) => (
          <>
            <Link onMouseDown={()=> {navigate(`/profile/?name=${x.name}`) ;dispatch(updateSearch(x.name))}}><li className="m-2">
              <ProfileCard data={x} />
            </li></Link>
          </>
        ))}
      </ul>
      <hr class="my-1 h-0.5 border-t-1 bg-neutral-200 opacity-100 dark:opacity-50" />
    </div>
  );
};

export default RecentSearch;
