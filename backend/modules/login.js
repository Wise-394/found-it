async function login(pool, username, password) {
  const result = await pool.query(
    "SELECT * FROM users WHERE username = $1 AND password = $2",
    [username, password]
  );
  if (result.rows.length > 0){
    return { success: true, message: "successfully logged in" }
  } else {
    return { success: false, message: "incorrect username or password" }
  }
}

export default login;