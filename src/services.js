import axios from "axios";

const baseUrl = "http://localhost:8080";

export const searchProviders = async (
  searchString,
  offset = 1,
  limit = 10,
  sortBy = "name"
) => {
  const body = { name: searchString };
  const url = `${baseUrl}/search?offset=${offset}&limit=${limit}&sortBy=${sortBy}`;
  const { data } = await axios.post(url, body);
  return data;
};
