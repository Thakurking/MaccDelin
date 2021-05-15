const express = require("express");
const app = express();

/**********MODULES**********/
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const httpError = require("http-errors");
const cors = require("cors");
const figlet = require("figlet");
const boxen = require("boxen");
require("dotenv").config();
/***************************/

/**********CORS SETUP**********/
const allowlist = ["http://localhost:3000"];
const corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};
app.use(cors(corsOptionsDelegate, { Credential: true }));
/******************************/

/**********MODULES SETUP**********/
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
/*********************************/

const adminRouter = require("./routes/auth-route/admin.auth");
app.use("/admin", adminRouter);

/**********HTTP-ERROR**********/
app.use(async (req, res, next) => {
  next(httpError.NotFound("PAGE NOT FOUND"));
});
app.use((req, res, next) => {
  res.status(err.status || 500);
  res.send({ error: { status: err.status || 500, message: err.message } });
});
/******************************/

/**********SERVER PORT SETUP**********/
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Admin Server Crashed On PORT ${PORT}`);
  figlet("MACCDELIN", {}, function (err, data) {
    if (err) {
      console.log("Something Went Wrong");
      console.dir(err);
      return;
    }
    console.log(
      boxen(data, {
        padding: 2,
        margin: 2,
        borderStyle: "bold",
        borderColor: "yellowBright",
        backgroundColor: "cyan",
      })
    );
  });
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
/*************************************/
