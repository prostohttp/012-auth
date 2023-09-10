const api = require("../api/fetch");

const DB_PORT = process.env.DB_PORT || 3334;
const DB_URL = process.env.DB_URL || "http://backend-mongo";

const getLogin = (_, res) => {
  res.status(200).render("user/login");
};

const getMe = async (req, res) => {
  const user = await api.fetch(`${DB_URL}:${DB_PORT}/api/user/me`);
  // res.status(200).render("user/me");
};

const postLogin = async (req, res) => {
  const { userLogin, userPassword } = req.body;
  const data = {
    userLogin,
    userPassword,
  };
  await api.fetch(`${DB_URL}:${DB_PORT}/api/user/login`, "POST", data);
};

const postSignup = async (req, res) => {
  const { userName, userLogin, userPassword } = req.body;
  const data = {
    userName,
    userLogin,
    userPassword,
  };
  await api.fetch(`${DB_URL}:${DB_PORT}/api/user/signup`, "POST", data);
  res.status(200).redirect("/");
};

module.exports = {
  getLogin: getLogin,
  postLogin: postLogin,
  getMe: getMe,
  postSignup: postSignup,
};
