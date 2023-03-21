import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isOpen);
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

    return ( 
        <div className="flex justify-between p-8 items-center ">
          <Link href={'/'}>
            <Image className="w-[100px] md:w-[150px]" src={logo} height="100" width="500" alt="logo"/>
          </Link>

          <div className="flex items-center md:hidden ">
            <button
              type="button"
              className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none  focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={handleToggle}
            >
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-9 w-8 z-50" />
            </button>
          </div>

          <ul className=" hidden md:flex md:gap-20 md:px-4 md:text-xl md:font-semibold">
            <Link href={'/rankings'} className="hover:underline">
              Rankings
            </Link>
            <Link href={'/cards'} className="hover:underline">
              Cards
            </Link>
            <Link href={'/challenges'} className="hover:underline">
              Challenges
            </Link>
          </ul>

          <div className={`${isOpen ? 'block' : 'hidden'} md:hidden fixed inset-0 z-40 bg-gray-900 transition-opacity duration-500 opacity-95`}>
        <div className="flex items-center justify-center h-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/rankings" onClick={handleToggle}>
              <p className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-2xl font-medium">
                Rankings
              </p>
            </Link>
            <Link href="/cards" onClick={handleToggle}>
              <p className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-2xl font-medium">
                Cards
              </p>
            </Link>
            <Link href="/challenges" onClick={handleToggle}>
              <p className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-2xl font-medium">
                Challenges
              </p>
            </Link>
          </div>
        </div>
      </div>
      </div>
     );
}
 
export default Navbar;