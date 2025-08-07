const ApiKeyValidator = require('../security/ApiKeyValidator');

function apiKeyAuthMiddleware(validApiKey) {
  const validator = new ApiKeyValidator(validApiKey);
  const HEADER_NAME = 'x-api-key';

  return (req, res, next) => {
    const headers = req?.headers || {};
    const key = headers[HEADER_NAME];

    if (!key) {
      return res.status(401).json({ error: 'API Key header missing' });
    }

    if (!validator.isValid(key)) {
      return res.status(403).json({ error: 'Invalid API Key' });
    }

    req.user = { name: 'APIUser' };
    next();
  };
}

module.exports = apiKeyAuthMiddleware;