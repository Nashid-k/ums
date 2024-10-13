const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/user_management_system");
const path = require("path");
const express = require("express");
const nocache = require("nocache");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(nocache())
//for user routes
const userRoute = require("./routes/userRoute");
app.use("/", userRoute);

//route for admin
const adminRoute = require("./routes/adminRoute");
app.use("/admin", adminRoute);

app.listen(3002, () => {
  console.log(`http://localhost:3002`);
});
