import axios from "axios";

const authAPI = axios.create({
  baseURL: "http://localhost:5000/api/v1/auth",
  withCredentials: true,
});

export const loginUserFn = async (values) => {
  const { data } = await authAPI.post("/login", { ...values });
  return data;
};

export const getUserFn = async () => {
  const { data } = await authAPI.get("/user");
  return data;
};

export const logoutUserFn = async () => {
  const { data } = await authAPI.get("/logout");
  return data;
};
