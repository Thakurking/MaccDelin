const UserPermissionModel = require("../../../Helper/DB.Helper/Permission.DB/userPermissionSchema");

const {
  mongooseErrorHandler,
} = require("../../../Helper/Error/mongooseErrorHelper");

exports.AssignRoles = async (req, res) => {
  try {
    const userID = req.body.userID;
    /**
     * roles =>
     * Permission: {
     *  ACCESS_BLOG: true
     * }
     */
    if (!userID) {
      return res.json({ message: "userID Not Given", status: false });
    }
    const permissionModel = await UserPermissionModel.findOne({
      userID: userID,
    });
    permissionModel.Permission = req.body.Permissions.Permission;
    if (await permissionModel.save()) {
      return res.json({ message: "Permission Updated", status: true });
    }
  } catch (error) {
    console.log(error);
    const errors = await mongooseErrorHandler(error);
    return res.json(errors);
  }
};
