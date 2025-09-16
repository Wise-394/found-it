const SignUpForm = () => {
  const register = async (e) => {
    e.preventDefault();

    const formData = {
      fullname: e.target.fullname.value,
      username: e.target.username.value,
      password: e.target.password.value,
    };

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Response from server:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={register}>
      <div>
        <label htmlFor="fullname">Full Name:</label>
        <input type="text" id="fullname" name="fullname" required />
      </div>

      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpForm;