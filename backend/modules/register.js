async function register(pool, username, password) {
  const exists = await isUsernameAlreadyExist(pool, username);
  const valid = validateInputs(username, password);
  if (exists) {
    return { success: false, message: "Username already exist" };
  }
  if (!valid) {
    return { success: false, message: "Username or Password is too short" };
  }

  await pool.query("INSERT INTO users(username, password) VALUES ($1, $2)", [
    username,
    password,
  ]);

  return { success: true, message: "User registered successfully" };
}
async function isUsernameAlreadyExist(pool, username) {
  const result = await pool.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);
  return result.rows.length > 0;
}
function validateInputs(username, password) {
  const minLength = 8;
  if (username.length > minLength && password.length > minLength) {
    return true;
  } else {
    return false;
  }
}

export default register;
