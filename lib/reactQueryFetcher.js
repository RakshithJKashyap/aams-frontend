import axios from "axios";

export async function getUserfromDB({ queryKey }) {
  const [_, user] = queryKey;
  const response = await axios.get("http://localhost:8000/get_user", {
    params: { auth0_token: user.sub },
  });

  return response.data;
}
