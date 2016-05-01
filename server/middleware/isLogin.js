module.exports = function isLogin(req, res, next){
  if(req.user) return next();
  res.status(401).json({
    code: 401,
    message: 'Access allowed only for registered users.',
    stacktrace: new Error().stack
  });
};
