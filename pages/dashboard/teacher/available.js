import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Dash from "@/layouts/Dash";
import { useEffect, useState } from "react";
import axios from "axios";

const Avaibility = ({ user }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // using axios
    const fetchData = async () => {
      setLoading(true);
      const res = await axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/get_cameras`)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);
  return (
    <>
      <Dash title={`Avaibility`} user={user}>
        <div class="flex flex-wrap justify-start p-6">
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
            {!loading && (
              <>
                {data.map((item, index) => (
                  <div
                    class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 min-h-[7rem]"
                    key={index}
                  >
                    Classname -
                    <h1 className="font-bold text-3xl">{item.class_name}</h1>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </Dash>
    </>
  );
};

export const getServerSideProps = withPageAuthRequired();

export default Avaibility;
