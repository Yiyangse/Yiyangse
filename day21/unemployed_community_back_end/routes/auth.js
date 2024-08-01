const express = require('express');
const router = express.Router();
const { renderJoin } = require('../controllers/page');
const { isLoggedIn } = require('../middlewares');

router.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.followerCount = 0;
  res.locals.followingCount = 0;
  res.locals.followingIdList = [];
  next();
});

router.get('/profile', isLoggedIn, renderJoin);
router.get('/login', isNotLoggedIn, renderJoin);
router.get('/logout', isLoggedIn, logout);
router.get(
  '/kakao',
  passport.authenticate('kakao', {
    failureRedirect: '/?loginError=카카오로그인 실패',
  }),
  (req, res) => {
    res.redirect('/');
  }
);

module.exports = router;
