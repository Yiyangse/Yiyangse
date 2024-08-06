// 필요한 모델들을 불러옵니다.
const { User, Post, Hashtag } = require('../models');

// 사용자 프로필 페이지를 렌더링하는 함수입니다.
exports.renderProfile = (req, res) => {
  res.render('profile', { title: '내 정보 - NodeBird' });
};

// 회원가입 페이지를 렌더링하는 함수입니다.
exports.renderJoin = (req, res) => {
  res.render('join', { title: '회원가입 - NodeBird' });
};

// 메인 페이지를 렌더링하는 함수입니다. 페이지네이션(paging) 구현을 위한 코드입니다.
exports.renderMain = async (req, res, next) => {
  // 페이지 크기와 패딩 사이즈를 환경변수에서 읽어옵니다.
  let pageSize = Number(process.env.PAGE_SIZE);
  let pagePaddingSize = Number(process.env.PAGE_PADDING_SIZE);

  // 현재 페이지 번호를 초기화합니다. 쿼리 파라미터에서 currentPage를 읽어옵니다.
  let currentPage = 0;
  if (req.query.currentPage) currentPage = Number(req.query.currentPage);

  // 데이터베이스에서 전체 게시물 수를 계산하기 위한 변수입니다.
  let totalSize = 0;

  try {
    // 전체 게시물 수를 가져옵니다. (전체 게시물의 수를 계산하기 위해 모든 게시물을 가져옵니다.)
    const posts = await Post.findAll({
      include: {
        model: User,
        attributes: ['id', 'nick'], // 게시물과 함께 사용자의 id와 nick 정보를 가져옵니다.
      },
    });

    // 가져온 게시물 수를 totalSize에 저장합니다.
    totalSize = posts.length;
  } catch (err) {
    console.error(err);
    next(err); // 에러가 발생하면 다음 미들웨어로 전달합니다.
  }

  // 현재 페이지에 맞게 offset을 계산합니다.
  let offset = (currentPage - 1) * pageSize;
  if (offset < 0) {
    offset = 0; // offset이 음수일 경우 0으로 설정합니다.
  }

  try {
    // 현재 페이지에 맞는 게시물들을 가져옵니다.
    const posts = await Post.findAll({
      include: {
        model: User,
        attributes: ['id', 'nick'], // 게시물과 함께 사용자의 id와 nick 정보를 가져옵니다.
      },
      offset: Number(offset) || 0, // offset 값을 설정합니다.
      limit: pageSize, // 페이지 크기만큼 게시물을 제한합니다.
      order: [['createdAt', 'DESC']], // 최신 게시물이 먼저 오도록 정렬합니다.
    });

    // 메인 페이지를 렌더링합니다.
    res.render('main', {
      title: 'NodeBird',
      twits: posts, // 가져온 게시물들을 twits로 전달합니다.
      totalSize: totalSize, // 전체 게시물 수를 전달합니다.
      currentPage: currentPage, // 현재 페이지 번호를 전달합니다.
      pageSize: pageSize, // 페이지 크기를 전달합니다.
      pagePaddingSize: pagePaddingSize, // 페이지 패딩 사이즈를 전달합니다.
    });
  } catch (err) {
    console.error(err);
    next(err); // 에러가 발생하면 다음 미들웨어로 전달합니다.
  }
};

// 해시태그 페이지를 렌더링하는 함수입니다.
exports.renderHashtag = async (req, res, next) => {
  // 쿼리 파라미터에서 hashtag를 가져옵니다.
  const query = req.query.hashtag;
  if (!query) {
    // 해시태그가 없으면 홈 페이지로 리다이렉트합니다.
    return res.redirect('/');
  }

  try {
    // 해시태그를 데이터베이스에서 찾습니다.
    const hashtag = await Hashtag.findOne({ where: { title: query } });
    let posts = [];
    if (hashtag) {
      // 해시태그가 존재하면 해당 해시태그와 관련된 게시물들을 가져옵니다.
      posts = await hashtag.getPosts({ include: [{ model: User }] });
    }

    // 해시태그와 관련된 게시물들을 렌더링합니다.
    return res.render('main', {
      title: `${query} | NodeBird`, // 페이지 타이틀을 해시태그와 함께 설정합니다.
      twits: posts, // 가져온 게시물들을 twits로 전달합니다.
    });
  } catch (error) {
    console.error(error);
    return next(error); // 에러가 발생하면 다음 미들웨어로 전달합니다.
  }
};
