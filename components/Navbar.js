import { useState } from "react";
import Link from "next/link";
import { FaHamburger, FaUser } from "react-icons/fa";
import { useUser } from "@auth0/nextjs-auth0/client";

const Navbar = (props) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { user, isLoading } = useUser();
  return (
    <div className="fixed z-50 w-full bg-black pt-[5px] select-none border-b border-gray-600">
      <nav className="w-full">
        <div className="container mx-auto flex justify-between px-4 md:px-0">
          <div>
            <Link
              href="/"
              className="flex items-center p-4 font-bold text-2xl bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"
            >
              AAMS
            </Link>
          </div>

          <div className="hidden items-center justify-between gap-3 lg:flex">
            <div className="">
              {!isLoading && !user && (
                <a
                  href="/api/auth/login"
                  className="font-bold text-white hover:text-secondaryblue flex items-center gap-2 px-4 py-2 rounded-md transition duration-300 ease-in-out hover:text-blue-600"
                >
                  <FaUser />
                  Login
                </a>
              )}
              {user && (
                <a
                  href="/api/auth/logout"
                  className="font-bold text-white hover:text-secondaryblue flex items-center gap-2 px-4 py-2 rounded-md transition duration-300 ease-in-out hover:text-blue-600"
                >
                  Log out
                </a>
              )}
            </div>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              className="btn-mobile-menu"
              onClick={() => setShowMobileMenu((val) => !val)}
            >
              <FaHamburger />
            </button>
          </div>
        </div>
        <div
          className={`mobile-menu absolute z-30 ${
            showMobileMenu ? "" : "hidden"
          } h-screen w-full bg-black p-6`}
        >
          hello
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
