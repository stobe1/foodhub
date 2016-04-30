module.exports = function isLogin(req, res, next){
  if(req.user) return next();
  res.status(401).json({ error: 'Access allowed only for registered users.' });
};
