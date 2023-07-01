import React from "react";

const ProfileCard = () => {
  return (
    <div className="h-80 w-48 p-3 border border-t-white rounded-lg shadow-lg bg-white">
      <div class="max-w-xl grid-cols-1 mx-auto text-center divide-y">
        <div class="photo-wrapper p-1 ">
          <img
            class="w-16 h-16 rounded-full mx-auto"
            src="https://media.licdn.com/dms/image/C4D03AQFaGYL__kT5mA/profile-displayphoto-shrink_800_800/0/1617119828687?e=1693440000&v=beta&t=z0CrI4-Q4EBcRkAJdrk65Pk5AKwPriaYMWxBNyzizac"
            alt="John Doe"
          />
        </div>
        <div class="p-1">
          <h3 class="text-center text-sm text-gray-900 font-bold  leading-8">
            Raju GM
          </h3>
          <div class="text-center">
            <p className="text-xs">Sr Software Engineer</p>
          </div>
        </div>
        <div>
          <ul>
            <li className="flex m-1">
              <p className="text-xs underline text-left">Who's viewed your profile </p>{" "}
              <p className="text-xs   underline text-blue-700 cursor-pointer">
                {" "}
                20
              </p>
            </li>

            <li className="flex m-1">
              <p className="text-xs text-left">Connections grow your Network</p>{" "}
              <p className="text-xs  underline text-blue-700 cursor-pointer">
                354
              </p>
            </li>
          </ul>
        </div>

        <div className="text-left">
          <p className="text-xs">Access exclusive tools & Insights</p>
          <h3 className="text-xs underline font-bold">
            {" "}
            Grab Hire Faster, Try premium free
          </h3>
        </div>

        <div>
          <span className="font-normal text-sm text-left">My Items</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
