const express = require('express');
const router = express.Router();
const {
  renderProfile,
  renderJoin,
  renderMain,
  renderHashtag,
} = require('../controllers/page');

router.use((req, res, next) => {
  res.locals.user = null;
  res.locals.followerCount = req.user ? req.user.Followers.length : 0;
  res.locals.followingCount = req.user ? req.user.Followings.length : 0;
  res.locals.followingIdList = req.user
    ? req.user.Followers.map((f) => f.id)
    : [];
  next();
});

router.get('/profile', renderProfile);

router.get('/join', renderJoin);

router.get('/', renderMain);

router.get('/hashtag', renderHashtag);

module.exports = router;
