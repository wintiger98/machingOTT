const validation = (values) => {
  let errors = {};

  if (!values.ID) {
    errors.ID = "User ID is required";
  }

  if (!values.password) {
    errors.password = "password is required";
  } else if (values.password.length < 3) {
    errors.password = "password must be more than three characters";
  }

  return errors;
};

export default validation;
