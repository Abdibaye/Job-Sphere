import * as Yup from 'yup'

export const formvalidation = Yup.object().shape({
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
  