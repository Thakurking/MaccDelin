const express = require("express");
const app = express();

/**********MODULES**********/
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
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
const whiteList = [
  "http://localhost:3000",
  "http://localhost:5001",
  "http://localhost:5002",
  "http://localhost:5003",
];
const corsOption = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not Allowed From Other Origins"));
    }
  },
};
app.use(cors(corsOption));
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

/**********MongoDB Connection**********/
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost/MaccDelin", {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log(`mongoDB Disconnected on: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
connectDB();
/************************************/
