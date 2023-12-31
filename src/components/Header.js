import Image from "next/image";
import { SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon } from "@heroicons/react/outline";

import { HomeIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* Left  */}
        <div className="relative hidden lg:inline-grid w-24">
          <h1>Photogram</h1>
        </div>

        <div className="relative w-10 lg:hidden flex-hrink-0">
          <Image
            src="/gram.png" // Path to the image from the 'public' directory
            alt="My Image"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none ">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black-rounded-md" type="text" placeholder="Search" />
          </div>
        </div>

        {/* <Right> */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="h-6 w-6" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />

          <PaperAirplaneIcon className=""/>
        </div>
      </div>
    </div>
  );
}

export default Header;
