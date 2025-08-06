class ApiKeyValidator {
  constructor(validKey) {
    if (!validKey) {
      throw new Error('API Key not configured.');
    }
    this.validApiKey = validKey;
  }

  isValid(key) {
    return key === this.validApiKey;
  }
}

module.exports = ApiKeyValidator;