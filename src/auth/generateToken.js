const jwt = require('jsonwebtoken');
const jwtConfig = require('../utils/jwtConfig');

const secret = process.env.JWT_SECRET;

function generateToken(id) {
  const token = jwt.sign({ data: { userId: id } }, secret, jwtConfig);
  return token;
}

module.exports = generateToken;