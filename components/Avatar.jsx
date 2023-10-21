import Image from "next/image";
import React from "react";

const Avatar = ({ url, className }) => {
  return (
    <Image
      src={url}
      width={40}
      height={40}
      className={`rounded-full hover:animate-pulse cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      alt="profile pic"
    />
  );
};

export default Avatar;
