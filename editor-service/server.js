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
/***************************/

/**********MODULES SETUP**********/
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
/*********************************/

const editorRouter = require("./routes/auth-routes/editor.auth.routes");
app.use("/editor", editorRouter);

/**********HTTP-ERROR**********/
app.use(async (req, res, next) => {
  next(httpError.NotFound("PAGE NOT FOUND"));
});
app.use((req, res, next) => {
  res.status(err.status || 500);
  res.send({ error: { status: err.status || 500, message: err.message } });
});
/******************************/

/**********CORS SETUP**********/
// const whiteList = [
//   "http://localhost:3000",
//   "http://localhost:5000",
//   "http://localhost:5001",
//   "http://localhost:5002",
//   "http://localhost:5003",
// ];
// const corsOption = {
//   origin: function (origin, callback) {
//     if (whiteList.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not Allowed From Other Origins"));
//     }
//   },
// };
// app.use(cors(corsOption));
const allowlist = [
  "http://localhost:3000",
  "http://localhost:5000",
  "http://localhost:5001",
  "http://localhost:5002",
  "http://localhost:5003",
  "http://localhost:5004",
];
const corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};
app.use(cors(corsOptionsDelegate, { credentials: true }));
/******************************/

/**********SERVER PORT SETUP**********/
const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => {
  console.log(`Editor Server Crashed On PORT ${PORT}`);
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
        backgroundColor: "magenta",
      })
    );
  });
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
/*************************************/
