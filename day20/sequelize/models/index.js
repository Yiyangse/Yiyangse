'use strict';

// 필요한 모듈들을 불러옵니다.
const fs = require('fs'); // 파일 시스템 모듈
const path = require('path'); // 경로 관련 모듈
const Sequelize = require('sequelize'); // Sequelize ORM 모듈
const User = require('./user'); // User 모델
const Comment = require('./comment'); // Comment 모델
const process = require('process'); // 프로세스 관련 모듈
const basename = path.basename(__filename); // 현재 파일 이름
const env = process.env.NODE_ENV || 'development'; // 환경 변수 설정, 기본값은 'development'
const config = require(__dirname + '/../config/config.json')[env]; // 환경에 맞는 데이터베이스 설정 파일을 불러옵니다.
const db = {}; // 데이터베이스 객체를 초기화합니다.

// Sequelize 인스턴스를 설정합니다.
let sequelize;
if (config.use_env_variable) {
  // 환경 변수를 사용하는 경우
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  // 직접 설정 값을 사용하는 경우
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// 현재 디렉토리에서 모델 파일들을 읽어와 초기화합니다.
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && // 숨김 파일 제외
      file !== basename && // 현재 파일 제외
      file.slice(-3) === '.js' && // .js 확장자 파일만 포함
      file.indexOf('.test.js') === -1 // 테스트 파일 제외
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file)); // 모델 파일을 불러옵니다.
    if (model && typeof model.initiate === 'function') {
      model.initiate(sequelize); // 모델을 Sequelize 인스턴스로 초기화합니다.
      db[model.name] = model; // 데이터베이스 객체에 모델을 추가합니다.
    }
  });

// 모델 간의 연관 관계를 설정합니다.
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db); // 연관 관계가 정의된 모델에 대해 associate 메서드를 호출합니다.
  }
});

// Sequelize 인스턴스와 Sequelize 객체를 db 객체에 추가합니다.
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// User와 Comment 모델을 db 객체에 추가합니다.
db.User = User;
db.Comment = Comment;

// User와 Comment 모델을 초기화합니다.
User.initiate(sequelize);
Comment.initiate(sequelize);

// User와 Comment 모델 간의 연관 관계를 설정합니다.
User.associate(db);
Comment.associate(db);

// db 객체를 모듈로 내보냅니다.
module.exports = db;
