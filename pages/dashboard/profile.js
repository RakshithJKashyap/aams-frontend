import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Dash from "@/layouts/Dash";
import CommonProfile from "@/components/Profile/CommonProfile";

const Profile = ({ user }) => {
  return (
    <>
      <Dash title={`Profile`} user={user}>
        <CommonProfile pro={user}/>
      </Dash>
    </>
  );
};

export const getServerSideProps = withPageAuthRequired();

export default Profile;
