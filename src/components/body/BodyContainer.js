import RecentPost from "../sidebar/RecentPost";
import FeederList from "./feed/FeederList";
import PostMessage from "./PostMessage";

const BodyContainer=()=>{

    return(
        <div className="pt-4 px-1">
            <>
              <div className="h-auto w-[37rem]">
                <PostMessage/>
                <FeederList/>
              </div>

            </>
        </div>
    )
}


export default BodyContainer;