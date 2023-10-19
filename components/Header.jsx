import React from "react";
import Avatar from "./Avatar";
import { MicrophoneIcon, Squares2X2Icon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="flex w-full p-5 justify-between text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>
      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>
        <Squares2X2Icon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100" />
        <Avatar url="/profile.jpg" />
      </div>
    </header>
  );
};

export default Header;
