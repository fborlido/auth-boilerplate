import React, { useEffect } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { Loader, TextInput } from "../components";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUserFn } from "../api/authAPI";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const client = useQueryClient();

  const auth = useAuth();

  const from = location?.state?.from || "/home";

  const { mutate: loginUser, isLoading } = useMutation({
    mutationFn: loginUserFn,
    onSuccess: () => {
      client.invalidateQueries(["user"]).then(() => {
        navigate(from);
        toast.success("Log In successful");
      });
    },
  });

  if (auth.user) return <Navigate to={from} />;

  return (
    <div>
      <Link to="..">Back</Link>
      <h1>Log In</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => loginUser(values)}
      >
        <Form>
          <TextInput id="email" name="email" label="Email." />
          <TextInput
            id="password"
            name="password"
            label="Password:"
            type="password"
          />
          <button type="submit" disabled={isLoading}>
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
