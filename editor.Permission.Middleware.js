const UserPermissionModel = require("./Helper/DB.Helper/Permission.DB/userPermissionSchema");

module.exports = async (req, res, next) => {
  try {
    const userID = req.cookies.user_id;
    console.log(userID);
    if (!userID) {
      return res.json({ message: "Access Denied", status: false });
    }
    const isUser = await UserPermissionModel.findOne({
      userID: userID,
    });
    if (isUser) {
      req.Permission = isUser.Permission;
      next();
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: error, status: false });
  }
};
