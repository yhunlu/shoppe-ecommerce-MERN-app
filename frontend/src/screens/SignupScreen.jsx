import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
  passwordConfirmation: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .label('Confirmed Password'),
});

const SignupScreen = () => {
  return (
    <>
      {/* Global Container */}
      <div className="flex items-center justify-center min-h-screen">
        {/* Card Container */}
        <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
          {/* Left Side */}
          <div className="p-6 md:p-20">
            {/* Top Content */}
            <h2 className="font-mono mb-5 text-4xl font-bold">Sign Up</h2>
            <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
              Sign up for your account to enjoy benefits of marketing in SHOPPE.
            </p>
            <Formik
              initialValues={{
                name: '',
                email: '',
                password: '',
                passwordConfirmation: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="relative flex flex-col">
                  <Field
                    className="border border-green-800 focus:border-green-600 rounded-md placeholder:font-sans placeholder:font-light"
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                  />
                  <ErrorMessage
                    className="text-rose-600"
                    name="name"
                    component="div"
                  />
                  <Field
                    className="mt-5 border border-green-800 focus:border-green-600 rounded-md placeholder:font-sans placeholder:font-light"
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                  />
                  <ErrorMessage
                    className="text-rose-600"
                    name="email"
                    component="div"
                  />
                  <Field
                    className="mt-5 border border-green-800 focus:border-green-600 rounded-md placeholder:font-sans placeholder:font-light"
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                  />
                  <ErrorMessage
                    className="text-rose-600"
                    name="password"
                    component="div"
                  />
                  <Field
                    className="mt-5 border border-green-800 focus:border-green-600 rounded-md placeholder:font-sans placeholder:font-light"
                    type="password"
                    name="passwordConfirmation"
                    placeholder="Enter Your Password Again"
                  />
                  <ErrorMessage
                    className="text-rose-600"
                    name="passwordConfirmation"
                    component="div"
                  />
                  <button
                    className="mt-5 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Sign UP
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          {/* Right Side */}
          <img
            src="images/signup.jpg"
            alt=""
            className="w-[430px] hidden md:block"
          />
        </div>
      </div>
    </>
  );
};

export default SignupScreen;
