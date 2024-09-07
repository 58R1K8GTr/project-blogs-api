const jwt = require('jsonwebtoken');

const { UserService } = require('../services');

const secret = process.env.JWT_SECRET;

function extractToken(bearerToken) {
  return bearerToken.split(' ')[1];
}

module.exports = async (req, res, next) => {
  const bearerToken = req.header('Authorization');
  if (!bearerToken) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const token = extractToken(bearerToken);

  try {
    const decoded = jwt.verify(token, secret);
    const user = await UserService.findById(decoded.data.userId);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};