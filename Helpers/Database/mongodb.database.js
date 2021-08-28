const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://olcan:OcN510.mZo@cluster0.gzdj8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDatabase = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryWrites: true,
    })
    .then(() => {
      console.log("MongoDb Connection Successful");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connectDatabase;
