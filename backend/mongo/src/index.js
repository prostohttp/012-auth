const express = require("express");
const session = require("express-session");
const passport = require("./api/passport");
const mongoose = require("mongoose");

const booksRouter = require("./routes/apiBookRouter");
const userRouter = require("./routes/apiUserRouter");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "SECRET" }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/books", booksRouter);
app.use("/api/user", userRouter);

const start = async (port, url) => {
	await mongoose.connect(url, {
		dbName: "books",
	});
	await mongoose.connect(url, {
		dbName: "users",
	});
	app.listen(port, () => {
		console.log(`Server started on port ${port}`);
	});
};

const PORT = process.env.PORT || 3334;
const URL_DB = process.env.URL_DB || "mongodb://root:example@mongo:27017/";
start(PORT, URL_DB);
