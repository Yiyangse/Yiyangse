const express = require('express');
const router = express.Router();
const { renderProfile } = require('../controllers/mypage');

router.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.followerCount = 0;
  res.locals.followingCount = 0;
  res.locals.followingIdList = [];
  next();
});

router.get('/profile', renderProfile);

module.exports = router;
