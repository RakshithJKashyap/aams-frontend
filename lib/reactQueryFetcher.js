import axios from "axios";

export async function getUserfromDB({ queryKey }) {
  const [_, user] = queryKey;
  const response = await axios.get(
    "https://aamsbackend.onrender.com/get_user",
    {
      params: { auth0_token: user.sub },
    }
  );

  return response.data;
}
