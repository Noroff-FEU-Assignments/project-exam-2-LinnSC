import axios from "axios";

export default async function FetchAPI(url) {
  const response = await axios.get(url);

  return response.data;
}
