const jwt = require('jsonwebtoken');
const fs = require('fs');

const jwtPayload = {
  key: "value"
};
const privateKey = fs.readFileSync('rsa_private.pem', 'utf8');
const jwtOptions = {
  algorithm: 'RS256',
};

const token = jwt.sign(jwtPayload, privateKey, jwtOptions);
console.log(token)
