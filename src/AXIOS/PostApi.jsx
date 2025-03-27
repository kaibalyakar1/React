import axios from "axios";

const api = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });

export const getPosts = async () => {
  try {
    const response = await api.get("/posts");
    return response; // Ensure it returns data
  } catch (error) {
    console.error("Error fetching posts:", error);
    return { data: [] }; // Return empty data to prevent crashes
  }
};

export const deleteApi = async (id) => {
  try {
    const response = await api.delete(`/posts/${id}`);
    return response; // Ensure it returns data
  } catch (error) {
    console.error("Error fetching posts:", error);
    return { data: [] }; // Return empty data to prevent crashes
  }
};

export const postApi = async (data) => {
  try {
    const response = await api.post("/posts", data);
    return response; // Ensure it returns data
  } catch (error) {
    console.error("Error fetching posts:", error);
    return { data: [] }; // Return empty data to prevent crashes
  }
};
