const express = require("express");
const passport = require("../api/passport");
const apiUser = require("../api/userHandlers");

const apiUserRouter = express.Router();

apiUserRouter.get("/logout", apiUser.logout);
apiUserRouter.post("/signup", apiUser.add);
apiUserRouter.post(
	"/login",
	passport.authenticate("local", { failureRedirect: "/login" }),
	apiUser.login
);
apiUserRouter.get(
	"/me",
	(req, res, next) => {
		if (!req.isAuthenticated()) {
			return res.redirect("/api/user/login");
		}
		next();
	},
	apiUser.profile
);

module.exports = apiUserRouter;
