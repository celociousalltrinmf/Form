import React from "react";
import { Formik, Form, Field } from "formik";
import { UserNameInput, JobTypeInput, CheckBoxInput } from "../CustomInput";
import { advancedSchema } from "../schemas";

const AdvanceForm = () => {
  const init = {
    userName: "",
    jobType: "",
    acceptedTos: false,
  };

  const onSubmit = async (values, actions) => {
    console.log("VALUES", values);
    console.log("ACTIONS", actions);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    actions.resetForm();
  };

  return (
    <Formik 
    initialValues={init} 
    validationSchema={advancedSchema}
    onSubmit = {onSubmit}
    >
      {({isSubmitting}) => (
        <Form>
          {/* Input Field */}
          <UserNameInput
            label="Username"
            name="userName"
            type="text"
            placeholder="Enter your UserName"
          />

          {/* DropDown box */}
          <JobTypeInput
            label="Job Type"
            name="jobType"
            placeholder="Please select a job"
          >
            <option value="">Please select a job type</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Product Manager</option>
            <option value="other">Other</option>
          </JobTypeInput>

          {/* Check box */}
          <CheckBoxInput type="checkbox" name="acceptedTos" />

          {/* <Field
            type="text"
            name="userName"
            placeholder="Enter your UserName"
          /> */}
          {/* <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
          /> */}
          <button type="submit" disabled={isSubmitting} >Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default AdvanceForm;
