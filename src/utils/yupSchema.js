import { string, array, object } from "yup";

//Setting Up Validation Schema using Yup Library for Form Validation.
export const validationSchema = object({
  groupName: string()
    .min(5)
    .max(25)
    .required("Please enter the name of your group!"),
  description: string()
    .min(30)
    .max(300)
    .required("Please enter your group's description!"),
  cardTerms: array(
    object({
      term: string()
        .required()
        .min(4)
        .max(15)
        .required("Please enter a valid term!"),
      defination: string()
        .required()
        .min(20)
        .max(300)
        .required("Please enter a valid defination!"),
    })
  ),
});
