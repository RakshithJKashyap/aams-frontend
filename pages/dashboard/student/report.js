import React from "react";

const Studentreport = () => {
  return (
    <div>
      <div class="w-full bg-white rounded-lg shadow-lg m-4">
        <div class="px-6 py-4">
          <h2 class="text-lg font-bold text-gray-800">
            Math Class - Grade 8 <br />
            <small class="text-gray-600">May 8, 2023</small>
          </h2>
        </div>

        <div class="px-6 py-4">
          <h3 class="text-md font-medium text-gray-700 mb-2">Students:</h3>
          <div class="flex flex-wrap gap-2">
            <span class="inline-block px-3 py-1 rounded-full text-sm font-semibold text-gray-700 bg-gray-200">
              John Smith
            </span>
            <span class="inline-block px-3 py-1 rounded-full text-sm font-semibold text-gray-700 bg-gray-200">
              Jane Doe
            </span>
            <span class="inline-block px-3 py-1 rounded-full text-sm font-semibold text-gray-700 bg-gray-200">
              Bob Johnson
            </span>
            <span class="inline-block px-3 py-1 rounded-full text-sm font-semibold text-gray-700 bg-gray-200">
              Sarah Lee
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studentreport;
