exports.errorHandler = async (err) => {
  console.log(err)
  let errors = {};
  if (err.code && err.code === 11000) {
    errors.email = "Admin Already Exist";
  }
  if (err.message.includes("admin validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};
