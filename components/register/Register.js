import { FaInfo, FaUpload } from "react-icons/fa";
import Head from "next/head";
import axios from "axios";
import { useState } from "react";

const Register = ({ user }) => {
  const [name, setName] = useState("");
  const [Username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [sem, setSem] = useState("");
  const [branch, setBranch] = useState("");
  const [section, setSection] = useState("");
  const [usn, setUsn] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  function handleChange(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", selectedFile);

    axios
      .post("https://aamsbackend.onrender.com/first_register", formData, {
        params: {
          auth0_token: user.sub,
          name: name,
          username: Username,
          email: email,
          sem: sem,
          branch: branch,
          section: section,
          usn: usn,
          role: "student",
        },
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
        // Handle successful registration response here
      })
      .catch((error) => {
        console.error("There was an error registering the user:", error);
        // Handle error response here
      });
  }

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <div className="px-1 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto w-full">
        <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900 border border-white shadow w-full">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              Profile
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Fill your profile
            </p>
          </div>

          <form>
            <div className="grid grid-cols-12 gap-4 sm:gap-6">
              <div className="col-span-3">
                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                  Profile photo
                </label>
              </div>

              <div className="col-span-9">
                <div className="flex items-center gap-5">
                  <img
                    className="inline-block h-16 w-16 rounded-full ring-2 ring-white dark:ring-gray-800"
                    src="https://cdn4.iconfinder.com/data/icons/online-shopping-line-11/32/Artboard_46-512.png"
                    alt="Image Description"
                  />
                  <div className="flex gap-x-2">
                    <div>
                      <div
                        type="button"
                        className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                      >
                        <FaUpload />
                        <input
                          required
                          type="file"
                          onChange={handleFileChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-3">
                <label
                  for="af-account-full-name"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Full name
                </label>
              </div>

              <div className="col-span-9">
                <div className="sm:flex">
                  <input
                    required
                    onChange={(e) => setName(e.target.value)}
                    id="af-account-full-name"
                    type="text"
                    className="py-2 border border-white px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="col-span-3">
                <label
                  for="af-account-full-name"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Username
                </label>
              </div>

              <div className="col-span-9">
                <div className="sm:flex">
                  <input
                    required
                    id="af-account-full-name"
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    className="py-2 border border-white px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    placeholder="Username"
                  />
                </div>
              </div>

              <div className="col-span-3">
                <label
                  for="af-account-email"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Email
                </label>
              </div>

              <div className="col-span-9">
                <input
                  required
                  id="af-account-email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="py-2 px-3 border border-white pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  placeholder="Email"
                />
              </div>

              <div className="col-span-3">
                <label
                  for="af-account-bio"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Semester
                </label>
              </div>

              <div className="col-span-9">
                <input
                  required
                  id="af-account-bio"
                  onChange={(e) => setSem(e.target.value)}
                  className="py-2 px-3 block w-full border border-white rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  rows="6"
                  placeholder="Sem"
                ></input>
              </div>

              <div className="col-span-3">
                <label
                  for="af-account-bio"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Branch
                </label>
              </div>

              <div className="col-span-9">
                <input
                  required
                  id="af-account-bio"
                  onChange={(e) => setBranch(e.target.value)}
                  className="py-2 px-3 block w-full border border-white rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  rows="6"
                  placeholder="Branch"
                ></input>
              </div>

              <div className="col-span-3">
                <label
                  for="af-account-bio"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Section
                </label>
              </div>

              <div className="col-span-9">
                <input
                  required
                  id="af-account-bio"
                  onChange={(e) => setSection(e.target.value)}
                  className="py-2 px-3 block w-full border border-white rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  rows="6"
                  placeholder="Section"
                ></input>
              </div>

              <div className="col-span-3">
                <label
                  for="af-account-bio"
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  USN
                </label>
              </div>

              <div className="col-span-9">
                <input
                  required
                  id="af-account-bio"
                  onChange={(e) => setUsn(e.target.value)}
                  className="py-2 px-3 block w-full border border-white rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  rows="6"
                  placeholder="Usn"
                ></input>
              </div>
            </div>

            <div className="mt-5 flex justify-end gap-x-2">
              <button
                type="submit"
                onClick={handleChange}
                className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              >
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
