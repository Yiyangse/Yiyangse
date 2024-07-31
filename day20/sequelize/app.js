// 필요한 모듈들을 불러옵니다.
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const { sequelize } = require('./models');
const { User } = require('./models');
const { Op } = require('sequelize');

// Express 애플리케이션을 생성합니다.
const app = express();

// 서버 포트를 설정합니다. 환경 변수가 없으면 3001을 사용합니다.
app.set('port', process.env.PORT || 3001);
// 뷰 엔진으로 html을 사용하도록 설정합니다.
app.set('view engine', 'html');
// Nunjucks 템플릿 엔진을 설정합니다.
nunjucks.configure('views', {
  express: app,
  watch: true, // 개발 중 템플릿 변경 시 자동 리로드
});

// 데이터베이스와 동기화합니다. (force: false는 기존 테이블을 삭제하지 않음)
sequelize
  .sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

// HTTP 요청 로깅을 위한 미들웨어
app.use(morgan('dev'));
// 정적 파일 제공을 위한 미들웨어
app.use(express.static(path.join(__dirname, 'public')));
// JSON 요청 본문 파싱을 위한 미들웨어
app.use(express.json());
// URL-encoded 요청 본문 파싱을 위한 미들웨어
app.use(express.urlencoded({ extended: false }));
//{ extended: true }가 기본값, 복잡한 객체를 파싱가능하고 풍부한 인코딩을 지원하지만 약간의 보안 위험
//false로 하면 간단한 객체만 파싱

// 404 오류 처리 미들웨어
app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

// 오류 처리 미들웨어
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  // 개발 환경에서만 상세한 오류 정보를 제공
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

// 서버를 시작하고 지정된 포트에서 요청을 기다립니다.
app.listen(app.get('port'), async () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
  const { User } = require('./models');
  // User.create({
  //   name: 'zero',
  //   age: 24,
  //   married: false,
  //   comment: '자기소개1',
  // });
  let data = await User.findAll({
    attributes: ['name', 'married'],
    where: {
      [Op.or]: [{ married: 0 }, { age: { [Op.gt]: 30 } }],
    },
  });
  console.log(data);

  data = await User.findAll({
    attributes: ['id', 'name'],
    order: [['age', 'DESC']],
  });
  console.log('order =>', data);

  data = await User.findAll({
    attributes: ['id', 'name'],
    order: [['age', 'DESC']],
    limit: 1,
  });
  console.log('limit => ', data);

  data = await User.findAll({
    attributes: ['id', 'name'],
    order: [['age', 'DESC']],
    limit: 1,
    offset: 1,
  });
  console.log('offset =>', data);

  // User.update({ comment: '바꿀 내용' }, { where: { id: 2 } });
  data = await User.findOne({
    include: [{ model: Comment }],
  });
  console.log(data.Comments);
});
