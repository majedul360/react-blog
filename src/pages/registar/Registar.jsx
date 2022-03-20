import "./Registar.scss";

const Registar = () => {
  return (
    <div className="registar">
      <span>login</span>
      <form>
        <h3>registar</h3>
        <label htmlFor="">username</label>
        <input type="text" placeholder="enter your user name" />
        <label htmlFor="">email</label>
        <br />
        <input type="email" placeholder="enter your email" />
        <br />
        <label htmlFor="">password</label> <br />
        <input type="password" placeholder="enter your password" />
        <br />
        <input type="submit" value="registar" />
      </form>
    </div>
  );
};

export default Registar;
