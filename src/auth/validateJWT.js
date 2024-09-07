const jwt = require('jsonwebtoken');

const { findById } = require('../utils/db/queries');

const secret = process.env.JWT_SECRET;

function extractToken(bearerToken) {
  return bearerToken.split(' ')[1];
}

function verifyAndThrow(callable, message) {
  if (callable()) {
    throw new Error(message);
  }
}

module.exports = async (req, res, next) => {
  const bearerToken = req.header('Authorization');
  const token = extractToken(bearerToken);
  try {
    // primeiro o if !bearerToken, depois o verifyAndThrow abaixo. não altere essa ordem
    if (!bearerToken) {
      return res.status(401).json({ message: 'Token not found' });
    }
    verifyAndThrow(() => !token, 'Token not found');
    const decoded = jwt.verify(token, secret);
    const user = await findById(decoded.data.userId);
    verifyAndThrow(() => !user, 'Usuário não encontrado');
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};