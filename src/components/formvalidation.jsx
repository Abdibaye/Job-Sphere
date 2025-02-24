import * as Yup from 'yup'

export const formvalidation = Yup.object({
    title: Yup.string().min(3).required("Enter title"),
    type: Yup.string().min(3).required("Enter Salary"),
    salary: Yup.number().min(1).required('please enter salary')
})