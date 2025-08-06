class SqlSecurityValidator {
  static blockedPatterns = [
    /\bDROP\s+TABLE\b/i,
    /\bDROP\s+DATABASE\b/i,
    /\bTRUNCATE\b/i,
    /\bALTER\s+TABLE\b/i,
    /\bALTER\s+DATABASE\b/i,
    /\bSHUTDOWN\b/i,
    /\bEXEC\s+xp_cmdshell\b/i
  ];

  static allowedCommands = ['SELECT', 'INSERT', 'UPDATE', 'DELETE'];

  static validate(sql) {
    if (!sql || typeof sql !== 'string' || !sql.trim()) {
      throw new Error('SQL query cannot be empty.');
    }

    const cleaned = sql.trim();
    const upper = cleaned.toUpperCase();
    
    const startsWithAllowed = SqlSecurityValidator.allowedCommands.some(cmd => upper.startsWith(cmd));
    if (!startsWithAllowed) {
      throw new Error('Only basic SQL commands are allowed: SELECT, INSERT, UPDATE, DELETE.');
    }
    
    const statementCount = cleaned.split(';').filter(s => s.trim()).length;
    if (statementCount > 1) {
      throw new Error('Multiple SQL statements are not allowed.');
    }
    
    if (cleaned.includes('--') || cleaned.includes('/*') || cleaned.includes('*/')) {
      throw new Error('SQL comments are not allowed.');
    }
    
    const injectionPattern = /(\bOR\b|\bAND\b)\s+.+?=/i;
    if (injectionPattern.test(cleaned)) {
      throw new Error('Possible SQL injection attempt detected.');
    }
    
    for (const pattern of SqlSecurityValidator.blockedPatterns) {
      if (pattern.test(cleaned)) {
        throw new Error(`The SQL command contains a forbidden operation.`);
      }
    }
  }
}

module.exports = SqlSecurityValidator;