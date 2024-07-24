//pbkdf2는 "Password-Based Key Derivation Function 2"의 약자로, 비밀번호를 기반으로 한 키 파생 함수입니다. 이 함수는 주로 비밀번호와 같은 비밀 정보를 안전하게 저장하거나 전송하기 위해 사용됩니다. 주로 인증 및 암호화에서 사용됩니다.
//Salt(솔트)는 암호화에서 사용되는 임의의 무작위 데이터입니다. 주로 비밀번호와 같은 비밀 정보의 보안성을 높이기 위해 사용됩니다.
const crypto = require('crypto');
crypto.randomBytes(64, (err, buf) => {
  const salt = buf.toString('base64');
  console.log('salt:', salt);
  crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
    console.log('password:', key.toString('base64'));
  });
});
