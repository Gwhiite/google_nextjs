"use client";
import Image from "next/image";
import Footer from "@/components/Footer";
import Avatar from "../components/Avatar";
import {
  Squares2X2Icon,
  MagnifyingGlassIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/solid";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

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
    <div className="flex flex-col items-center justify-center h-screen">
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
      <form className="flex flex-col mt-44 items-center flex-grow w-4/5">
        <Image height={100} width={300} src="/google.svg" />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <MagnifyingGlassIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none  flex-grow"
          />
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 ">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            I'm Feeling Lucky
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
