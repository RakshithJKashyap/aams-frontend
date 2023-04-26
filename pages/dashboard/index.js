import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Dash from "@/layouts/Dash";

const Dashboard = ({ user }) => {
  return (
    <>
      <Dash title={`Dashboard`} user={user}></Dash>
    </>
  );
};

export const getServerSideProps = withPageAuthRequired();

export default Dashboard;
