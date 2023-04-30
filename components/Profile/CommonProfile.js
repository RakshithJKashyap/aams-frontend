import React, { useState, useEffect } from "react";
import axios from "axios";

const CommonProfile = ({ pro }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/get_user`, {
       params: {
        auth0_token : pro.sub,
       }
      });
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
        <div className="md:w-2/3 p-6">
          <h2 className="text-3xl font-semibold mb-4 text-gray-200">{name}</h2>
          <p className="text-lg mb-4 text-gray-400">Type: {type}</p>
          <p className="text-lg mb-4 text-gray-400">Username: {username}</p>
          <p className="text-lg mb-4 text-gray-400">Email: {email}</p>
          <p className="text-lg mb-4 text-gray-400">Semester: {sem}</p>
          <p className="text-lg mb-4 text-gray-400">Branch: {branch}</p>
          <p className="text-lg mb-4 text-gray-400">USN: {usn}</p>
          <p className="text-lg mb-4 text-gray-400">Section: {section}</p>
        </div>
      </div>
    </div>
  );
};

export default CommonProfile;
