import React, { useState, useEffect } from "react";
import axios from "axios";

const CommonProfile = ({ pro }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/get_user`,
        {
          params: {
            auth0_token: pro.sub,
          },
        }
      );
      setUser(response.data);
      console.log(response.data);
    };
    getUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  const { type, username, name, email, sem, branch, usn, photo_url, section } =
    user;

  return (
    <div className="max-w-5xl mx-auto my-8 bg-gray-900 shadow-lg rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 p-6">
          <img
            className="w-full h-auto rounded-lg shadow-lg"
            src={photo_url}
            alt={name}
          />
        </div>
        <div class="w-full max-w-2xl bg-gray-900 rounded-lg shadow-xl overflow-hidden">
          <div class="px-6 py-8 md:p-10">
            <h2 class="text-3xl font-extrabold text-white mb-4">{name}</h2>
            <div class="flex flex-wrap -mx-2 mb-6">
              <div class="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <div class="px-4 py-3 bg-gray-800 rounded-lg shadow-sm">
                  <p class="text-lg font-semibold text-white mb-2">Type</p>
                  <p class="text-lg text-gray-300">{type}</p>
                </div>
              </div>
              <div class="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <div class="px-4 py-3 bg-gray-800 rounded-lg shadow-sm">
                  <p class="text-lg font-semibold text-white mb-2">Username</p>
                  <p class="text-lg text-gray-300">{username}</p>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap -mx-2 mb-6">
              <div class="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <div class="px-4 py-3 bg-gray-800 rounded-lg shadow-sm">
                  <p class="text-lg font-semibold text-white mb-2">Email</p>
                  <p class="text-lg text-gray-300">{email}</p>
                </div>
              </div>
              <div class="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <div class="px-4 py-3 bg-gray-800 rounded-lg shadow-sm">
                  <p class="text-lg font-semibold text-white mb-2">Semester</p>
                  <p class="text-lg text-gray-300">{sem}</p>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap -mx-2 mb-6">
              <div class="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <div class="px-4 py-3 bg-gray-800 rounded-lg shadow-sm">
                  <p class="text-lg font-semibold text-white mb-2">Branch</p>
                  <p class="text-lg text-gray-300">{branch}</p>
                </div>
              </div>
              <div class="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <div class="px-4 py-3 bg-gray-800 rounded-lg shadow-sm">
                  <p class="text-lg font-semibold text-white mb-2">USN</p>
                  <p class="text-lg text-gray-300">{usn}</p>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-800 rounded-lg shadow-sm">
              <p class="text-lg font-semibold text-white mb-2">Section</p>
              <p class="text-lg text-gray-300">{section}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonProfile;
