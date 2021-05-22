const token = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const jwt = req.cookies.token;
    // console.log(jwt);
    if (!jwt) {
      return res.json({ message: "Access failed", status: false });
    }
    token.verify(jwt, process.env.JWT_SECRET, async (err, payload) => {
      if (err) {
        return register.json({
          message: "Token Authorization Failed",
          status: false,
        });
      }
      if (payload.isAdmin && payload.admin) {
        req.admin = payload.admin;
        req.isAdmin = true;
        next();
      }
      if (payload.isEditor && payload.editor) {
        req.editor = payload.editor;
        req.isEditor = true;
        next();
      } else {
        return res.json({ message: "User Not Verified", status: false });
      }
    });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal Server Error", status: false });
  }
};
