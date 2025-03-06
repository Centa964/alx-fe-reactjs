import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistrationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

function FormikForm() {
  return (
    <>
      <h2>Register with Formik</h2>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={RegistrationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log('Form submitted:', values);
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="username">Username</label>
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="div" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default FormikForm;