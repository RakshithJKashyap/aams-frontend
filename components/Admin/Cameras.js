import { useState, useEffect } from "react";
import axios from "axios";
import { FaRemoveFormat } from "react-icons/fa";

function Table() {
  const [className, setClassName] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [rowChanged, setRowChanged] = useState(false); // [1
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/get_cameras")
      .then((response) => setRows(response.data))
      .catch((error) => console.error(error));
  }, [ipAddress, rowChanged]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!className || !ipAddress) return;

    try {
      const response = await axios.post(
        "http://localhost:8000/add_cameras", {},
         {
          params: {
            class_name: className,
            ip_address : ipAddress,
          }
        }
      );
      setRows([...rows, response.data]);
      setClassName("");
      setIpAddress("");
    } catch (error) {
      console.error(error);
    }
    
  };

  const handleDelete = async (id, class_name ) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/delete_camera/${class_name }`
      );
      if (response.data.status === "success") {
        setRowChanged(!rowChanged); // [2
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
      <div className="flex items-center justify-center gap-4 px-4 py-2">
        <div className="flex-1">
          <label>className Name:</label>
          <input
            type="text"
            id="className-name-input"
            placeholder="Enter className name"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div className="flex-1">
          <label>IP Address:</label>
          <input
            type="text"
            id="ip-address-input"
            placeholder="Enter IP address"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
            className="w-full px-3 py-2 border border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="px-4 py-2 font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 dark:bg-blue-700 mt-6"
        >
          Add
        </button>
      </div>

      <div className="max-w-md mx-auto mt-12 dark:bg-gray-800">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className=" align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b dark:border-gray-700 sm:rounded-lg">
              <table className="w-full divide-y dark:divide-gray-600">
                <thead className="dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
                    >
                      className Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
                    >
                      IP Address
                    </th>
                    <th
                      scope="col"
                      className="pr-0 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-900 divide-y dark:divide-gray-600">
                  {rows.map((row, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
                        {row.class_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">
                        {row.ip_address}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleDelete(row.id, row.class_name)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <FaRemoveFormat/>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
