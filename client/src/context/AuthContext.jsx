import { useMutation, useQuery } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";
import { getUserFn, logoutUserFn } from "../api/authAPI";
import { Loader } from "../components";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const savedUser = localStorage.getItem("user");

  const [user, setUser] = useState(JSON.parse(savedUser) || null);

  const { isFetching, isLoading } = useQuery(["user"], getUserFn, {
    onSuccess: (data) => {
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
    },
    onError: () => {
      setUser(null);
      localStorage.removeItem("user");
    },
  });

  const { mutate: logoutUser } = useMutation({
    mutationFn: logoutUserFn,
    onSuccess: () => {
      setUser(null);
      localStorage.removeItem("user");
    },
  });

  if (isFetching || isLoading) return <Loader />;

  const value = { user, logoutUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
