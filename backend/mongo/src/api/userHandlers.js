const User = require("../model/User");

const addUser = async (req, res) => {
	const { userName, userLogin, userPassword } = req.body;
	const user = new User({
		userName,
		userLogin,
		userPassword,
	});
	try {
		const userExists = await User.findOne({ userLogin }).exec();
		if (!userExists) {
			await user.save();
			res.status(201).json(user);
		} else {
			res.status(404).send({ error: "Такой пользователь уже существует" });
		}
	} catch (error) {
		res.status(500).json(error.message);
	}
};

const loginUser = async (req, res) => {
	console.log("req.user: ", req.user);
	res.redirect("/api/user/me");
};

const logoutUser = async (req, res) => {
	req.logout();
	res.redirect("/");
};

const profileUser = async (req, res) => {
	const user = req.user;
	console.log("USER", user);
	res.render("user/me", { user });
};

module.exports = {
	add: addUser,
	login: loginUser,
	logout: logoutUser,
	profile: profileUser,
};
