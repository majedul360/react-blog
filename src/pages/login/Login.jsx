import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <span>registar</span>
      <form>
        <h3>login</h3>
        <label htmlFor="">email</label>
        <br />
        <input type="email" placeholder="enter your email" />
        <br />
        <label htmlFor="">password</label> <br />
        <input type="password" placeholder="enter your password" />
        <br />
        <input type="submit" value="login" />
      </form>
    </div>
  );
};

export default Login;
