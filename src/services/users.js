import axios from "axios";
const baseUrl = "http://localhost:3001/api/users";

const getAll = async () => {
  const request = axios.get(baseUrl);
  const response = await request;
  return response.data;
};

const create = async (newObject) => {
  const request = axios.post(baseUrl, newObject);
  const response = await request;
  return response.data;
};

const users = { getAll, create };

export default users;
