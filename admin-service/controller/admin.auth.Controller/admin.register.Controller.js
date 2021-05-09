// const getDatabase = require("../../../Helper/DB-Utils/getDatabase");

const { AdminModel } = require("../../../Helper/DB-Utils/getDatabase");

exports.AdminRegister = async (req, res) => {
  // res.send("hello");
  const { Name } = req.body;
  // const Admin = await getDatabase().AdminModel;

  const admin = await AdminModel.create({ name: Name });
  console.log(admin);
};

exports.GetAdmin = async (req, res) => {
  res.send("hii");
  const admins = await AdminModel.find({});
  console.log(admins);
};
