import {
  FaHamburger,
  FaHome,
  FaInnosoft,
  FaRProject,
  FaSignOutAlt,
  FaStumbleupon,
  FaTable,
  FaUser,
} from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

const SidebarStudent = ({ title }) => {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  return (
    <>
      <div className="sticky top-0 inset-x-0 z-20 border-y px-4 sm:px-6 md:px-8 lg:hidden dark:border-gray-700">
        <div className="flex items-center py-4">
          <button type="button" className="text-white">
            <span className="sr-only">Toggle Navigation</span>
            <FaHamburger
              color="white"
              onClick={() => setSidebarToggle((value) => !value)}
            />
          </button>

          <ol className="ml-3 flex items-center whitespace-nowrap min-w-0">
            <li className="text-sm font-semibold text-gray-800 truncate dark:text-gray-400">
              {title}
            </li>
          </ol>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 ${
          sidebarToggle ? "hidden" : ""
        } bottom-0 z-[60] w-64 border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y bg-gray-900 dark:border-gray-700`}
      >
        <div className="px-6 flex justify-between">
          <div className="flex items-center font-bold text-2xl bg-clip-text bg-gradient-to-tl text-white cursor-pointer">
            AAMS{" "}
            <span className="text-sm font-normal ml-2">Student edition</span>
          </div>
          <FaHamburger
            className="mt-2.5 block lg:hidden text-white"
            onClick={() => setSidebarToggle((value) => !value)}
          />
        </div>

        <nav className="p-6  flex flex-col flex-wrap">
          <ul className="space-y-1.5">
            <li className="cursor-pointer">
              <div className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm rounded-md hover:bg-gray-800 dark:bg-gray-900 text-white">
                <FaHome color="white" />
                Dashboard
              </div>
            </li>
            <li className="cursor-pointer">
              <div className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm rounded-md hover:bg-gray-800 dark:bg-gray-900 text-white">
                <FaUser color="white" />
                Profile
              </div>
            </li>
            <li className="cursor-pointer">
              <div className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm rounded-md hover:bg-gray-800 dark:bg-gray-900 text-white">
                <FaInnosoft color="white" />
                Report
              </div>
            </li>
            <li className="cursor-pointer">
              <a
                href="/api/auth/logout"
                className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm rounded-md hover:bg-gray-800 dark:bg-gray-900 text-white"
              >
                <FaSignOutAlt color="white" />
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SidebarStudent;

export const SidebarTecher = ({ title }) => {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  return (
    <>
      <div className="sticky top-0 inset-x-0 z-20 border-y px-4 sm:px-6 md:px-8 lg:hidden dark:border-gray-700">
        <div className="flex items-center py-4">
          <button type="button" className="text-white">
            <span className="sr-only">Toggle Navigation</span>
            <FaHamburger
              color="white"
              onClick={() => setSidebarToggle((value) => !value)}
            />
          </button>

          <ol className="ml-3 flex items-center whitespace-nowrap min-w-0">
            <li className="text-sm font-semibold text-gray-800 truncate dark:text-gray-400">
              {title}
            </li>
          </ol>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 ${
          sidebarToggle ? "hidden" : ""
        } bottom-0 z-[60] w-64 border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y bg-gray-900 dark:border-gray-700`}
      >
        <div className="px-6 flex justify-between">
          <div className="flex items-center font-bold text-2xl bg-clip-text bg-gradient-to-tl text-white cursor-pointer">
            AAMS{" "}
            <span className="text-sm font-normal ml-2">Teacher edition</span>
          </div>
          <FaHamburger
            className="mt-2.5 block lg:hidden text-white"
            onClick={() => setSidebarToggle((value) => !value)}
          />
        </div>

        <nav className="p-6   flex flex-col flex-wrap">
          <ul className="space-y-1.5">
            <li className="cursor-pointer">
              <div className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm rounded-md hover:bg-gray-800 dark:bg-gray-900 text-white">
                <FaHome color="white" />
                Dashboard
              </div>
            </li>

            <li className="cursor-pointer">
              <Link
                href={`/dashboard/teacher/select`}
                className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm rounded-md hover:bg-gray-800 dark:bg-gray-900 text-white"
              >
                <FaUser color="white" />
                Select Class
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                href={`/dashboard/teacher/available`}
                className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm rounded-md hover:bg-gray-800 dark:bg-gray-900 text-white"
              >
                <FaRProject color="white" />
                Avaliable classes
              </Link>
            </li>
            <li className="cursor-pointer">
              <div className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm rounded-md hover:bg-gray-800 dark:bg-gray-900 text-white">
                <FaTable color="white" />
                Report
              </div>
            </li>
            <li className="cursor-pointer">
              <Link
                href={`/dashboard/profile`}
                className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm rounded-md hover:bg-gray-800 dark:bg-gray-900 text-white"
              >
                <FaUser color="white" />
                Profile
              </Link>
            </li>
            <li className="cursor-pointer">
              <a
                href="/api/auth/logout"
                className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm rounded-md hover:bg-gray-800 dark:bg-gray-900 text-white"
              >
                <FaSignOutAlt color="white" />
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
