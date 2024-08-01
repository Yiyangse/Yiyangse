//로컬로그인 전략 수집
//로그인에만 해당하는 전략이므로 회원가입을 따로 만들어야 함.
//사용자가 로그인했는지, 하지 않았는지 여부를 체크하는 미들웨어도 만듦
exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).send('로그인 필요');
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    const message = encodeURIComponent('로그인한 상태입니다.');
    res.redirect(`/?error=${message}`);
  }
};
