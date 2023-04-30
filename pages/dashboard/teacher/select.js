import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Dash from "@/layouts/Dash";

const Select = ({ user }) => {
  return (
    <>
      <Dash title={`Select Class`} user={user}>
        
      </Dash>
    </>
  );
};

export const getServerSideProps = withPageAuthRequired();

export default Select;
