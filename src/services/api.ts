import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

export const fetchThreats = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/threats`);
    console.log("Data received:", res.data);
    return res.data;
  } catch (err) {
    console.error("Error fetching threats:", err);
    return [];
  }
};
