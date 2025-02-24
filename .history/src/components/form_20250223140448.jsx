import { useFormik } from "formik";
import { formvalidation } from "./formvalidation";
import { useEffect, useState } from "react";

const initialValues = {
  title: '',
  type: '',
  salary: ''
};

function Form() {
  const [step, setStep] = useState(0);

  


  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues,
    validationSchema: formvalidation,
    onSubmit: (values) => {
      console.log(values);
      if (step === 0) {
        setStep(1);
      }
    },
  });
  

  return (
    <div className="h-screen font-inter flex justify-center p-3">
      <div className="bg-gray-200 w-1/2 rounded-sm flex flex-col justify-center items-center">
       {step === 0 && <section>
        <h1 className="m-2 font-semibold text-lg">First Form Page</h1>
          <form
          onSubmit={handleSubmit}
          className="bg-white w-[350px]  h-fit flex flex-col justify-center p-6 rounded-tr-lg shadow-md"
        >
          <label className="mb-2">Title</label>
          <input
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            className="h-[35px] border border-gray-300 rounded-tr-lg shadow-sm focus:outline-none font-sans font-light"
            type="text"
            placeholder="Software Engineer"
          />
          {errors.title && <small className="text-red-500">{errors.title}</small>}


          <label className="mb-2">Type</label>
          <input
            name="type"
            value={values.type}
            onChange={handleChange}
            onBlur={handleBlur}
            className="h-[35px] border border-gray-300 rounded-tr-lg shadow-sm focus:outline-none font-light"
            type="text"
            placeholder="Full-time"
          />
          {errors.type && <small className="text-red-500">{errors.type}</small>}


          <label className="mb-2">Salary</label>
          <input
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
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Next
          </button>
        </form>
        </section>}
        {step === 1 && <section>
        <h1 className="m-2 font-semibold text-lg">Second Form-Page</h1>
          <form
          onSubmit={handleSubmit}
          className="bg-white w-[350px]  h-fit flex flex-col justify-center p-6 rounded-tr-lg shadow-md"
        >
          <label className="mb-2">company</label>
          <input
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            className="h-[35px] border border-gray-300 rounded-tr-lg shadow-sm focus:outline-none font-sans font-light"
            type="text"
            placeholder="Google"
          />
          {errors.title && <small className="text-red-500">{errors.title}</small>}


          <label className="mb-2">logo</label>
          <input
            name="type"
            value={values.type}
            onChange={handleChange}
            onBlur={handleBlur}
            className="h-[35px] border border-gray-300 rounded-tr-lg shadow-sm focus:outline-none font-light"
            type="text"
            placeholder="https://logo.clearbit.com/google.com"
          />
          {errors.type && <small className="text-red-500">{errors.type}</small>}


          <label className="mb-2">description</label>

          <textarea name="description"
            value={values.salary}
            onChange={handleChange}
            onBlur={handleBlur}
            className=" border border-gray-300 rounded-tr-lg shadow-sm focus:outline-none font-light"
            type="text"

            placeholder="Enter description her..."> 
          </textarea>
          
        
          {errors.salary && <small className="text-red-500">{errors.salary}</small>}

          <div className="flex justify-between">
            <button
              type="submit"
              onClick={() => setStep(0)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
              back
            </button>
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
              Next
            </button>
          </div>

        </form>
        </section>}
      </div>
      <section>
        
      </section>
    </div>
  );
}

export default Form;