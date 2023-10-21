import {
  MagnifyingGlassIcon,
  MicrophoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const homeHandler = () => {
    router.push("/");
  };

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) {
      return;
    }
    searchInputRef.current.value = "";
    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src={"/google.svg"}
          width={120}
          height={40}
          className="cursor-pointer"
          onClick={homeHandler}
          alt="logo"
          priority
        />
        <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5">
          <input
            type="text"
            className="flex-grow w-full focus:outline-none"
            ref={searchInputRef}
          />
          <XMarkIcon
            onClick={() => {
              searchInputRef.current.value = "";
            }}
            className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3 "
          />
          <MicrophoneIcon className="h-6 cursor-pointer mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <MagnifyingGlassIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar className="ml-auto" url="/profile.jpg" />
      </div>

      <HeaderOptions />
    </header>
  );
};

export default Header;
