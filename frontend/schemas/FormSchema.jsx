import { object, string, number, date, InferType } from "yup";

let userSchema = object({
  name: string().min(3).max(25).required("Please enter your name"),
  password: string().min(5).max(25).required("Please enter your password"),
  phoneno: number()
    .min(10)
    .positive()
    .integer()
    .required("Please enter your phone no"),
  email: string().email().required("Please enter your email"),
  experience: string().min(3).max(25).required("Please enter your experience"),
  work: string()
    .min(3)
    .max(25)
    .required("Please enter your work experience details"),
});

export default userSchema;
