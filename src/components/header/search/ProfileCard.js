import React from "react";

const ProfileCard = ({ data }) => {
  const { name, image } = data;
  return (
    <div class="flex flex-col photo-wrapper  ">
      <img class="w-10 h-10 rounded-full mx-auto" src={image} alt="John Doe" />{" "}
      <span className="text-xs">{name}</span>
    </div>
  );
};

export default ProfileCard;
