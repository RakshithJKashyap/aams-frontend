import Dash from "@/layouts/Dash";
import { useEffect, useState } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import axios from "axios";

const Studentreport = ({ user }) => {
  const [attendenceVal, setAttendenceVal] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/get_attendance`,
        {},
        {
          params: {
            auth_token: user.sub,
          },
        }
      );
      setAttendenceVal(data.data);
    }
    fetchData();
  }, []);

  return (
    <Dash title={`Student Report`} user={user}>
      {attendenceVal.length == 0 && (
        <div class="w-11/12 h-96 bg-slate-900 rounded-lg shadow-lg m-4 grid place-content-center">
          No data/ No classes attended
        </div>
      )}
      {attendenceVal.length > 0 &&
        attendenceVal.map((item, index) => {
          return (
            <div class="w-11/12 bg-white rounded-lg shadow-lg m-4" key={index}>
              <div class="px-6 py-4">
                <h2 class="text-lg font-bold text-gray-800">
                  {item.subject} Class / {item.sem} / {item.section} <br />
                  <small class="text-gray-600">{item.date}</small>
                </h2>
              </div>

              <div class="px-6 py-4">
                <h3 class="text-md font-medium text-gray-700 mb-2">
                  Students:
                </h3>
                <div class="flex flex-wrap gap-2">
                  {item.attendence.map((student, index) => {
                    return (
                      <span
                        key={index}
                        class="inline-block px-3 py-1 rounded-full text-sm font-semibold text-gray-700 bg-gray-200"
                      >
                        {student}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
    </Dash>
  );
};

export const getServerSideProps = withPageAuthRequired();

export default Studentreport;
