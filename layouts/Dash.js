import SidebarStudent from "@/components/LayoutComponents/Sidebar";
import { useQuery } from "react-query";
import { getUserfromDB } from "@/lib/reactQueryFetcher";
import FourOhFour from "@/components/FourOhFour";
import Loading from "@/components/Loading";

const Dash = ({ children, title, user }) => {
  const { data, error, isError, isLoading } = useQuery(
    ["getUser", user],
    getUserfromDB
  );

  if (isLoading) return <Loading />;
  if (isError) return <FourOhFour error={error.message} />;
  if (data && data.status === "success" && data.type === "student") {
    return (
      <>
        <div className="bg-slate-900">
          <SidebarStudent title="Dashboard" />
          <div class="w-full sidebarenhance">
            <header>
              <h1 class="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
                {title}
              </h1>
              <div>{children}</div>
            </header>
          </div>
        </div>
      </>
    );
  }
  if (data && data.status === "success" && data.type === "teacher") {
    return (
      <>
        <div className="bg-slate-900">
          <SidebarStudent title="Dashboard" />
          <div class="w-full sidebarenhance">
            <header>
              <h1 class="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
                {title}
              </h1>
              <div>{children}</div>
            </header>
          </div>
        </div>
      </>
    );
  }
  if (data && data.status === "failed") {
    return <div className="text-white">Register with other info</div>;
  }
};

export default Dash;
