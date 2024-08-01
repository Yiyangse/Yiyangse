//패스포트 모듈 작성
const passport = require('passport');
const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const User = require('../models/user');

//passport.serializeUser
//req.session 객체에 어떤 데이터를 저장할 지 선택, 사용자 정보를 다 들고 있으면 메모리를 많이 차지하기 때문에 사용자의 ID만 저장
//passport.deserializeUser
//req.session에 저장된 사용자 ID를 바탕으로 DB조회로 사용자 정보를 얻어낸 후 req.user에 저장
// passport의 세션 관리 설정을 정의합니다.
module.exports = () => {
  // 사용자 객체를 세션에 저장할 때 어떤 데이터를 저장할지 정의합니다.
  // 여기서는 사용자의 ID만 저장하여 메모리 사용을 최소화합니다.
  passport.serializeUser((user, done) => {
    done(null, user.id); // 사용자 ID를 세션에 저장합니다.
  });

  // 세션에 저장된 사용자 ID를 바탕으로 사용자 정보를 데이터베이스에서 조회합니다.
  // 조회된 사용자 정보를 req.user에 저장합니다.
  passport.deserializeUser((id, done) => {
    // User.findOne의 쿼리 문법 오류: 'whrer' 대신 'where' 사용
    User.findOne({ where: { id } }) // 데이터베이스에서 사용자 정보를 조회합니다.
      .then((user) => done(null, user)) // 사용자 정보를 성공적으로 찾았을 경우
      .catch((err) => done(err)); // 오류 발생 시
  });

  // 로컬 로그인 전략을 설정합니다.
  local();
  // 카카오 로그인 전략을 설정합니다.
  kakao();
};
