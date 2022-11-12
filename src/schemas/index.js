import * as yup from "yup";

//* min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

//*Basic Schema Validation
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


//*AdvanceSchema Validation
export const advancedSchema = yup.object().shape({
  userName: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),

  jobType: yup
    .string()
    .oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type")
    .required("Required"),

  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service"),
});