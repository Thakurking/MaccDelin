const UserPermissionModel = require("../../../Helper/DB.Helper/Permission.DB/userPermissionSchema");

const {
  mongooseErrorHandler,
} = require("../../../Helper/Error/mongooseErrorHelper");

exports.AssignRoles = async (req, res) => {
  try {
    const userID = req.body._id;
    const roles = req.body.role;
    const assignRoles = await UserPermissionModel.updateOne(
      { userID: userID },
      { $set: roles }
    );
    console.log(assignRoles);
  } catch (error) {
    console.log(error);
  }
};
