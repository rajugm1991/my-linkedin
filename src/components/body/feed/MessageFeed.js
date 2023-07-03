import React from "react";

function MessageFeed({type}) {
  return (
    <div className="pt-4 ">
      <div className="h-auto w-[37rem] border border-t-white rounded-lg bg-white">
        <div className="flex">
          <div class="photo-wrapper p-1 ">
            <img
              class="w-12  h-12 rounded-full m-2"
              src="https://media.licdn.com/dms/image/C4D03AQFaGYL__kT5mA/profile-displayphoto-shrink_800_800/0/1617119828687?e=1693440000&v=beta&t=z0CrI4-Q4EBcRkAJdrk65Pk5AKwPriaYMWxBNyzizac"
              alt="John Doe"
            />
          </div>

          <div className="pt-3">
            <p className="text-xs font-bold text-left ">Siddharth</p>
            <p className="text-xs text-left font-light">
              {" "}
              Cross border | Manager
            </p>
          </div>
        </div>

        <div>
            <span className="text-sm">
            Apple's new stores in Delhi and Mumbai have grossed monthly sales of more than ₹22-25 crore each 🤘🏻
            </span>
            <div>
              
              {type==='image'&&  <img alt="" className="h-auto w-[37rem]" src="https://media.licdn.com/dms/image/D5622AQHkOykX1b1Faw/feedshare-shrink_1280/0/1688233957758?e=1691020800&v=beta&t=99sSoTN5BD_r0I31DxGOhnQAHsbXKhi7S_Tq-EEkExM"></img>}
              
              {type==='video' && 
              <iframe className="h-80 w-[37rem]"  src="https://www.youtube.com/embed/g4Y-CRS_QRI" title="What happens inside a software interview? Algorithms, Data Structures, System Design and Behavioral" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              }
            </div>

        </div>

        <div>
        <div className="flex">
        <button class="bg-white m-5 hover:bg-gray-100 text-base   py-2 px-4 ">
          👍🏻 Like
        </button>
        <button class="bg-white  m-5 hover:bg-gray-100 text-base py-2 px-4 ">
          📃 Comment
        </button>
        <button class="bg-white  m-5 hover:bg-gray-100 text-base px-4 ">
          📮 Repost
        </button>
        <button class="bg-white  m-5 hover:bg-gray-100 text-base py-2 px-4 ">
          🚀 Send
        </button>
      </div>
        </div>
      </div>
    </div>
  );
}

export default MessageFeed;
