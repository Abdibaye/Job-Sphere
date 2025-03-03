import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const initialValues = {
  title: '',
  type: '',
  salary: '',
  company: '',
  logo: '',
  description: '',
  location: '',
  experienceLevel: '',
  currency: '',
};

const formvalidation = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  type: Yup.string().required("Type is required"),
  salary: Yup.number().required("Salary is required"),
  company: Yup.string().required("Company is required"),
  logo: Yup.string().url("Invalid URL").required("Logo is required"),
  description: Yup.string().required("Description is required"),
  location: Yup.string().required("Location is required"),
  experienceLevel: Yup.string().required("Experience level is required"),
  currency: Yup.string().required("Currency is required"),
});

function Form() { 
  const [step, setStep] = useState(0);

  const onSubmit = (values) => {
    if (step === 2) {
      alert(JSON.stringify(values, null, 2));
    }
  };

  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues,
    validationSchema: formvalidation,
    onSubmit,
  });

  const handleNext = () => {
    const currentStepErrors = validateStep(step, values);
    if (Object.keys(currentStepErrors).length === 0) {
      if (step < 2) {
        setStep(step + 1);
      }
    } else {
      console.log("Validation errors:", currentStepErrors);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }``
  };

  const validateStep = (step, values) => {
    const errors = {};
    if (step === 0) {
      if (!values.title) errors.title = "Title is required";
      if (!values.type) errors.type = "Type is required";
      if (!values.salary) errors.salary = "Salary is required";
    } else if (step === 1) {
      if (!values.company) errors.company = "Company is required";
      if (!values.logo) errors.logo = "Logo is required";
      if (!values.description) errors.description = "Description is required";
    }
    return errors;
  };

  return (
    <div className="h-screen font-inter flex justify-center p-3">
      <div className="bg-gray-200 w-1/2 rounded-sm flex flex-col justify-center items-center">
        {step === 0 && (
          <section>
            <h1 className="m-2 text-center font-semibold text-lg">First Form Page</h1>
            <form
              onSubmit={handleSubmit}
              className="bg-white w-[350px] h-fit flex flex-col justify-center p-6 rounded-tr-lg shadow-md"
            >
              <label htmlFor="title" className="mb-2">Title</label>
              <input
                id="title"
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                className="h-[35px] border border-gray-300 rounded-tr-lg shadow-sm focus:outline-none font-sans font-light"
                type="text"
                placeholder="Software Engineer"
              />
              {errors.title && <small className="text-red-500">{errors.title}</small>}

              <label htmlFor="type" className="mb-2">Type</label>
              <input
                id="type"
                name="type"
                value={values.type}
                onChange={handleChange}
                onBlur={handleBlur}
                className="h-[35px] border border-gray-300 rounded-tr-lg shadow-sm focus:outline-none font-light"
                type="text"
                placeholder="Full-time"
              />
              {errors.type && <small className="text-red-500">{errors.type}</small>}

              <label htmlFor="salary" className="mb-2">Salary</label>
              <input
                id="salary"
                name="salary"
                value={values.salary}
                onChange={handleChange}
                onBlur={handleBlur}
                className="h-[35px] border border-gray-300 rounded-tr-lg shadow-sm focus:outline-none font-light"
                type="text"
                placeholder="9600"
              />
              {errors.salary && <small className="text-red-500">{errors.salary}</small>}

              <button
                type="button"
                onClick={handleNext}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
              >
                Next
              </button>
            </form>
          </section>
        )}

        {step === 1 && (
          <section>
            <h1 className="m-2 text-center font-semibold text-lg">Second Form-Page</h1>
            <form
              onSubmit={handleSubmit}
              className="bg-white w-[350px] h-fit flex flex-col justify-center p-6 rounded-tr-lg shadow-md"
            >
              <label htmlFor="company" className="mb-2">Company</label>
              <input
                id="company"
                name="company"
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                className="h-[35px] border border-gray-300 rounded-tr-lg shadow-sm focus:outline-none font-sans font-light"
                type="text"
                placeholder="Google"
              />
              {errors.company && <small className="text-red-500">{errors.company}</small>}

              <label htmlFor="logo" className="mb-2">Logo</label>
              <input
                id="logo"
                name="logo"
                value={values.logo}
                onChange={handleChange}
                onBlur={handleBlur}
                className="h-[35px] border border-gray-300 rounded-tr-lg shadow-sm focus:outline-none font-light"
                type="text"
                placeholder="https://logo.clearbit.com/google.com"
              />
              {errors.logo && <small className="text-red-500">{errors.logo}</small>}

              <label htmlFor="description" className="mb-2">Description</label>
              <textarea
                id="description"
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-gray-300 rounded-tr-lg shadow-sm focus:outline-none font-light"
                cols="50"
                rows="4"
                placeholder="Enter description here..."
              ></textarea>
              {errors.description && <small className="text-red-500">{errors.description}</small>}

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                >
                  Next
                </button>
              </div>
            </form>
          </section>
        )}

        {step === 2 && (
          <section>
            <h1 className="m-2 text-center font-semibold text-lg">Last Form-Page</h1>
            <form
              onSubmit={handleSubmit}
              className="bg-white w-[350px] h-fit flex flex-col justify-center p-6 rounded-tr-lg shadow-md"
            >
              <label htmlFor="location" className="mb-2">Location</label>
              <input
                id="location"
                name="location"
                value={values.location}
                onChange={handleChange}
                onBlur={handleBlur}
                className="h-[35px] border border-gray-300 rounded-tr-lg shadow-sm focus:outline-none font-sans font-light"
                type="text"
                placeholder="San Francisco, USA"
              />
              {errors.location && <small className="text-red-500">{errors.location}</small>}

              <label htmlFor="experienceLevel" className="mb-2">Experience Level</label>
              <input
                id="experienceLevel"
                name="experienceLevel"
                value={values.experienceLevel}
                onChange={handleChange}
                onBlur={handleBlur}
                className="h-[35px] border border-gray-300 rounded-tr-lg shadow-sm focus:outline-none font-light"
                type="text"
                placeholder="Mid Level"
              />
              {errors.experienceLevel && <small className="text-red-500">{errors.experienceLevel}</small>}

              <label htmlFor="currency" className="mb-2">Currency</label>
              <input
                id="currency"
                name="currency"
                value={values.currency}
                onChange={handleChange}
                onBlur={handleBlur}
                className="h-[35px] border border-gray-300 rounded-tr-lg shadow-sm focus:outline-none font-light"
                type="text"
                placeholder="USD"
              />
              {errors.currency && <small className="text-red-500">{errors.currency}</small>}

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
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