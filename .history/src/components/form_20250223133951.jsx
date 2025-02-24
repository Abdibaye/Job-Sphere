import { useFormik } from "formik";
import { formValidation } from "./formvalidation";
import { useEffect, useState } from "react";

const initialValues = {
  title: '',
  type: '',
  salary: '',
  company: '',
  logo: '',
  description: ''
};

function Form() {
  const [step, setStep] = useState(0);

  const formik = useFormik({
    initialValues,
    validationSchema: formValidation,
    onSubmit: (values) => {
      console.log(values);
      if (step === 0) {
        setStep(1);
      } else {
        console.log("Final Submission:", values);
        // Submit to backend or handle final submission logic here
      }
    },
  });

  return (
    <div className="h-screen font-inter flex justify-center p-3">
      <div className="bg-gray-200 w-1/2 rounded-sm flex flex-col justify-center items-center">
        {step === 0 && (
          <section>
            <h1 className="m-2 font-semibold text-lg">First Form Page</h1>
            <form
              onSubmit={formik.handleSubmit}
              className="bg-white w-[350px] h-fit flex flex-col justify-center p-6 rounded-tr-lg shadow-md"
            >
              <label className="mb-2">Title</label>
              <input
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="h-[35px] border border-gray-300 rounded-tr-lg shadow-sm focus:outline-none font-sans font-light"
                type="text"
                placeholder="Software Engineer"
              />
              {formik.touched.title && formik.errors.title && (
                <small className="text-red-500">{formik.errors.title}</small>
              )}

              <label className="mb-2">Type</label>
              <input
                name="type"
                value={formik.values.type}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="h-[35px] border border-gray-300 rounded-tr-lg shadow-sm focus:outline-none font-light"
                type="text"
                placeholder="Full-time"
              />
              {formik.touched.type && formik.errors.type && (
                <small className="text-red-500">{formik.errors.type}</small>
              )}

              <label className="mb-2">Salary</label>
              <input
                name="salary"
                value={formik.values.salary}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="h-[35px] border border-gray-300 rounded-tr-lg shadow-sm focus:outline-none font-light"
                type="text"
                placeholder="9600"
              />
              {formik.touched.salary && formik.errors.salary && (
                <small className="text-red-500">{formik.errors.salary}</small>
              )}

              <button
                type="button"
                onClick={() => setStep(1)}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
              >
                Next
              </button>
            </form>
          </section>
        )}

        {step === 1 && (
          <section>
            <h1 className="m-2 font-semibold text-lg">Second Form Page</h1>
            <form
              onSubmit={formik.handleSubmit}
              className="bg-white w-[350px] h-fit flex flex-col justify-center p-6 rounded-tr-lg shadow-md"
            >
              <label className="mb-2">Company</label>
              <input
                name="company"
                value={formik.values.company}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="h-[35px] border border-gray-300 rounded-tr-lg shadow-sm focus:outline-none font-sans font-light"
                type="text"
                placeholder="Google"
              />
              {formik.touched.company && formik.errors.company && (
                <small className="text-red-500">{formik.errors.company}</small>
              )}

              <label className="mb-2">Logo</label>
              <input
                name="logo"
                value={formik.values.logo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="h-[35px] border border-gray-300 rounded-tr-lg shadow-sm focus:outline-none font-light"
                type="text"
                placeholder="https://logo.clearbit.com/google.com"
              />
              {formik.touched.logo && formik.errors.logo && (
                <small className="text-red-500">{formik.errors.logo}</small>
              )}

              <label className="mb-2">Description</label>
              <input
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="h-[35px] border border-gray-300 rounded-tr-lg shadow-sm focus:outline-none font-light"
                type="text"
                placeholder="A leading tech company"
              />
              {formik.touched.description && formik.errors.description && (
                <small className="text-red-500">{formik.errors.description}</small>
              )}

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(0)}
                  className="mt-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </section>
        )}
      </div>
    </div>
  );
}

export default Form;
