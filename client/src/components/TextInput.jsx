import { useField } from "formik";
import React from "react";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props.name);
  return (
    <div>
      <label htmlFor={props.id}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error && <p>{meta.error}</p>}
    </div>
  );
};

export default TextInput;
