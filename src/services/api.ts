import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

const getSections = async () => {
  try {
    const response = await api.get("/sections");
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { getSections };
