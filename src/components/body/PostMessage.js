import React from "react";

const PostMessage = () => {
  return (
    <div className="h-32 w-[37rem]  border-t-white rounded-lg shadow-lg bg-white">
      <div className="flex pt-2 px-5">
        <div class="photo-wrapper p-1 ">
          <img
            class="w-12 h-12 rounded-full mx-auto"
            src="https://media.licdn.com/dms/image/C4D03AQFaGYL__kT5mA/profile-displayphoto-shrink_800_800/0/1617119828687?e=1693440000&v=beta&t=z0CrI4-Q4EBcRkAJdrk65Pk5AKwPriaYMWxBNyzizac"
            alt="John Doe"
          />
        </div>
        <div>
          <input
            type="text"
            className="w-[30rem] h-12 rounded-full bg-white-200 border border-gray-400 placeholder:text-lg placeholder:px-2 hover:bg-gray-200 cursor-pointer"
            placeholder="Start a post"
          />
        </div>
      </div>

      <div className="flex">
        <button class="bg-white m-4 hover:bg-gray-100 text-gray-500 font-semibold py-2 px-4 ">
          📸 Photo
        </button>
        <button class="bg-white  m-4 hover:bg-gray-100 text-gray-500 font-semibold py-2 px-4 ">
          🎥 Video
        </button>
        <button class="bg-white  m-4 hover:bg-gray-100 text-gray-500 font-semibold py-2 px-4 ">
          🎤 Event
        </button>
        <button class="bg-white  m-4 hover:bg-gray-100 text-gray-500 font-semibold py-2 px-4 ">
          🔖 Write article
        </button>
      </div>
    </div>
  );
};

export default PostMessage;
