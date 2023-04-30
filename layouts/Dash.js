import SidebarStudent, { SidebarTecher } from "@/components/LayoutComponents/Sidebar";
import { useQuery } from "react-query";
import { getUserfromDB } from "@/lib/reactQueryFetcher";
import FourOhFour from "@/components/FourOhFour";
import Loading from "@/components/Loading";
import Head from "next/head";
import Register from "@/components/register/Register";

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
        <Head>
          <title>Dashboard</title>
        </Head>
        <div className="bg-slate-900">
          <SidebarStudent title="Dashboard" />
          <div class="sidebarenhance">
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
        <Head>
          <title>Dashboard</title>
        </Head>
        <div className="bg-slate-900">
          <SidebarTecher title="Dashboard" />
          <div class="sidebarenhance">
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
    return <Register user={user} />;
  }
};

export default Dash;
