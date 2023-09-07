const getLogin = (req, res) => {
	res.status(200).render("user/login");
};

const postLogin = (req, res) => {
	res.send("postLogin");
};

const getMe = (req, res) => {
	const user = { name: "Mikele" };
	res.status(200).render("user/me", user);
};

const postSignup = (req, res) => {
	res.send("postSignup");
};

module.exports = {
	getLogin: getLogin,
	postLogin: postLogin,
	getMe: getMe,
	postSignup: postSignup,
};
