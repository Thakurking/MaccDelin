const blogDB = require("./blog.DB.Connection");

const BlogModel = blogDB.model(
  "blog",
  require("../../../blog-service/models/blog.model")
);

module.exports = BlogModel;
