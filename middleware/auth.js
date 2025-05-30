const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.redirect('/login');

  try {
    const decoded = jwt.verify(token, 'jwt_secret_atharva');
    req.userId = decoded.id;
    req.role = decoded.role;
    next();
  } catch (err) {
    res.redirect('/login');
  }
};
