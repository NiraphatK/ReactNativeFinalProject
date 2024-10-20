import * as yup from "yup";

export const validationSchema = yup.object().shape({
  username: yup.string().required("Please enter a username."),
  email: yup
    .string()
    .required("Please enter your email.")
    .email("The email format is invalid."),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters.")
    .required("Please enter a password."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match.")
    .required("Please confirm your password.")
});
