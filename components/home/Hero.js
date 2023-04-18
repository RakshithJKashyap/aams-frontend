import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div class="flex items-center justify-center h-screen">
      <div class="relative overflow-hidden before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div class="flex justify-center">
            <div
              class="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 pl-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200"
              href="#"
            >
              Join us now
              <span class="py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-400">
                <FaAngleRight />
              </span>
            </div>
          </div>

          <div class="mt-5 max-w-2xl text-center mx-auto">
            <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
              Automatic Attendence
              <span class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                {" "}
                Management System
              </span>
            </h1>
          </div>

          <div class="mt-5 max-w-3xl text-center mx-auto">
            <p class="text-lg text-gray-600 dark:text-gray-400">
              Automate your attendence management with our AI powered solution.
            </p>
          </div>

          <div class="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
            <Link
              class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800"
              href="/login"
            >
              Get started
              <FaAngleRight />
            </Link>
            <a
              class="relative group inline-flex justify-center items-center gap-x-3.5 text-center bg-white border hover:border-gray-300 shadow-sm font-mono text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition p-2 pl-4 dark:bg-slate-900 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
              href="javascript:;"
            >
              For all your needs.
            </a>
          </div>

          <div class="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
            <span class="text-sm text-gray-600 dark:text-gray-400">
              By Team:
            </span>
            <span class="text-sm font-bold text-gray-900 dark:text-white">
              AAMS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
