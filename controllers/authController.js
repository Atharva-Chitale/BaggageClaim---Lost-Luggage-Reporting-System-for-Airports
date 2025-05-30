const bcrypt = require("bcrypt");
const jwtUtil = require("../utils/jwt");
const User = require("../models/User");
const Admin = require("../models/Admin");

exports.getSignup = (req, res) => res.render("signup");
exports.getLogin = (req, res) => res.render("login");

exports.postSignup = async (req, res) => {
  const { username, password, role } = req.body;
  const hashed = await bcrypt.hash(password, 10);

  if (role === "admin") await new Admin({ username, password: hashed }).save();
  else await new User({ username, password: hashed }).save();

  res.redirect("/login");
};

exports.postLogin = async (req, res) => {
  const { username, password, role } = req.body;
  const Model = role === "admin" ? Admin : User;
  const user = await Model.findOne({ username });

  if (!user) return res.send("User not found");

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.send("Invalid password");

  const token = jwtUtil.createToken({ id: user._id, role });
  res.cookie("token", token, { httpOnly: true });
  const Luggage = require('../models/Luggage');
  res.redirect(role === "admin" ? "/admin" : "/userDashboard");
};

exports.logout = (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
};
