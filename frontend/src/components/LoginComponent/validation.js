const validation = (values) => {
  let errors = {};

  if (!values.ID) {
    errors.ID = "User ID is required";
  }

  if (!values.password) {
    errors.password = "password is required";
  } else if (values.password.length < 5) {
    errors.password = "password must be more than five characters";
  }

  return errors;
};

export default validation;
