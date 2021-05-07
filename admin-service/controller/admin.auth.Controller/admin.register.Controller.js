const getDatabase = require("../../../getDatabase");

// import { getDatabase } from "../../../getDatabase";

exports.AdminRegister = async (req, res) => {
  const { Name } = req.body;
  const Admin = await getDatabase().AdminModel;

  const admin = await Admin.create({ name: Name });
  return res.json(admin);
};
