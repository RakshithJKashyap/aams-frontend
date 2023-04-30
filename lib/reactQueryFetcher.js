import axios from "axios";

export async function getUserfromDB({ queryKey }) {
  const [_, user] = queryKey;
  console.log(process.env.NEXT_PUBLIC_BASE_URL);
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/get_user`,
    {
      params: { auth0_token: user.sub },
    }
  );

  return response.data;
}
