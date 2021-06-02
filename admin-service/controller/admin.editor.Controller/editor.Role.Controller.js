const UserPermissionModel = require("../../../Helper/DB.Helper/Permission.DB/userPermissionSchema");


exports.AssignRoles = async (req, res) => {
  try {
    const userID = req.body.userID;
    /**
     * roles =>
     * Permission: {
     *  ACCESS_BLOG: true
     * }
     */
    console.log(userID);
    const Permission = req.body.Permissions;
    console.log(Permission);
    const assignRoles = await UserPermissionModel.updateOne(
      { userID: userID },
      { $set: Permission }
    );
    console.log(assignRoles);
  } catch (error) {
    console.log(error);
  }
};
