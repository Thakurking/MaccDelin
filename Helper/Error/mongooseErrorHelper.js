exports.mongooseErrorHandler = async (err) => {
  let errors = {};
  if (err.code && err.code === 11000) {
    errors.email = "User Already Exist";
  }
  if (err.message.includes("admin validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  if (err.message.includes("editor validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};
