async function register(pool, username, password) {
  const exists = await isUsernameAlreadyExist(pool, username);

  if (exists) {
    return false; 
  }

  await pool.query(
    "INSERT INTO users(username, password) VALUES ($1, $2)",
    [username, password]
  );

  return true; 
}

async function isUsernameAlreadyExist(pool, username) {
  const result = await pool.query(
    "SELECT * FROM users WHERE username = $1",
    [username]
  );
  return result.rows.length > 0;
}

module.exports = register;
