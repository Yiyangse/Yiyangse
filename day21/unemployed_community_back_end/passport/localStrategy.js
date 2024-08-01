const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/user');

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email', // 로그인 시 사용할 사용자 이름 필드
        passwordField: 'password', // 로그인 시 사용할 비밀번호 필드
        passReqToCallback: false, // 요청 객체(req)를 콜백 함수에 전달하지 않음
      },
      async (email, password, done) => {
        try {
          // 사용자 조회: 이메일로 사용자 검색
          const exUser = await User.findOne({ where: { email } });

          if (exUser) {
            // 비밀번호 비교: 입력된 비밀번호와 저장된 해시된 비밀번호 비교
            const result = await bcrypt.compare(password, exUser.password);

            if (result) {
              // 인증 성공: 사용자 객체를 반환
              done(null, exUser);
            } else {
              // 비밀번호 불일치: 실패 메시지 반환
              done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
            }
          } else {
            // 사용자 없음: 실패 메시지 반환
            done(null, false, { message: '가입되지 않는 회원입니다.' });
          }
        } catch (error) {
          // 오류 처리: 콘솔에 오류 로그 출력 후 에러 전달
          console.log(error);
          done(error);
        }
      }
    )
  );
};
