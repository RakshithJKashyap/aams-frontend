import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Dash from "@/layouts/Dash";

const Select = ({ user }) => {
  const [classname, setClassname] = useState("");
  const [section, setSection] = useState("");
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");
  const [subject, setSubject] = useState("");
  const onChange = (event) => {
    const value = event.target.value;
    setClassname(value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!classname || !section || !year || !branch) {
      alert("Please fill all the fields");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/start_class`,
        {},
        {
          params: {
            class_name: classname,
            sem: section,
            section: year,
            branch: branch,
            teacher_name: user.sub,
            subject: subject,
          },
        }
      );
      alert("Class Started");
      // Do something with the response if necessary
    } catch (error) {
      console.log(error);
      alert("error");
      // Handle errors if necessary
    }
  };
  return (
    <>
      <Dash title={`Select Class`} user={user}>
        <div class="p-4 bg-slate-900 m-4 rounded">
          <form className="m-3">
            <label class="block mb-2 font-bold text-gray-300" for="classname">
              Class Name:
            </label>
            <select onChange={onChange} className="form-select">
              <option defaultValue value={null}>
                Select Class
              </option>
              <option value="ACS1">ACS1</option>
              <option value="ISE3">ISE3</option>
            </select>

            <label
              class="block mt-4 mb-2 font-bold text-gray-300"
              for="section"
            >
              Section:
            </label>
            <input
              class="w-full px-3 py-2 leading-tight text-gray-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="section"
              onChange={(e) => setSection(e.target.value)}
              type="text"
              placeholder="Enter Section"
            />

            <label class="block mt-4 mb-2 font-bold text-gray-300" for="year">
              Year:
            </label>
            <input
              class="w-full px-3 py-2 leading-tight text-gray-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="year"
              onChange={(e) => setYear(e.target.value)}
              type="text"
              placeholder="Enter Year"
            />

            <label class="block mt-4 mb-2 font-bold text-gray-300" for="branch">
              Branch:
            </label>
            <input
              class="w-full px-3 py-2 leading-tight text-gray-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="branch"
              onChange={(e) => setBranch(e.target.value)}
              type="text"
              placeholder="Enter Branch"
            />
            <label class="block mt-4 mb-2 font-bold text-gray-300" for="branch">
              Subject:
            </label>
            <input
              class="w-full px-3 py-2 leading-tight text-gray-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="branch"
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              placeholder="Enter Subject"
            />

            <button
              onClick={handleSubmit}
              class="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </div>
      </Dash>
    </>
  );
};

export const getServerSideProps = withPageAuthRequired();

export default Select;
