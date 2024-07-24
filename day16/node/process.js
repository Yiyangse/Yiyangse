//npm i dotenv
//make file ".env"
// SECRET_ID=xxxx
// SECRET_CODE=yyyy

require('dotenv').config();

const secretId = process.env.SECRET_ID;
const secretCode = process.env.SECRET_CODE;
console.log(secretId);
console.log(secretCode);
