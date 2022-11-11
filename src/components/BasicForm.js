import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "./schemas";

const BasicForm = () => {
  const init = {
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit = (values, actions) => {
    console.log("VALUES", values);
    console.log("ACTIONS", actions);
    actions.resetForm()
  };

  const { values, handleChange, handleBlur, errors, touched, handleSubmit } =
    useFormik({
      initialValues: init,
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}

        <label>age</label>
        <input
          type="number"
          placeholder="Enter your age"
          name="age"
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.age && touched.age ? "input-error" : ""}
        />
        {errors.age && touched.age && <p className="error">{errors.age}</p>}

        <label>password</label>
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.password && touched.password ? "input-error" : ""}
        />
        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}

        <label>confirmPassword</label>
        <input
          type="password"
          placeholder="Enter your confirmPassword"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.confirmPassword && touched.confirmPassword
              ? "input-error"
              : ""
          }
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default BasicForm;
