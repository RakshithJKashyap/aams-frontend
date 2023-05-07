import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Dash from "@/layouts/Dash";
import News from "@/components/News";

const Dashboard = ({ user }) => {
  return (
    <>
      <Dash title={`Dashboard`} user={user}>
        <News />
      </Dash>
    </>
  );
};

export const getServerSideProps = withPageAuthRequired();

export default Dashboard;
