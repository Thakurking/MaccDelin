const AdminModel = require("../../../Helper/DB-Utils/getAdminDatabase1");

exports.AdminRegister = async (req, res) => {
  const { Name } = req.body;

  const admin = await AdminModel.create({ name: Name });
  console.log(admin);
};

exports.GetAdmin = async (req, res) => {
  res.send("hii");
  const admins = await AdminModel.find({});
  console.log(admins);
};
