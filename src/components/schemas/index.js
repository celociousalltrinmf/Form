import * as yup from "yup";

//* min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),

  age: yup
    .number()
    .positive("please enter a valid number")
    .integer()
    .required("Required"),

  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
    
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Required"),
});
