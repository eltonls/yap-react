import "./LoginForm.css";
import Button from "../Button/Button";

const LoginForm = () => {
  return (
    <form className="login-form" action="" method="get">
      <h2 className="heading-secondary">Login</h2>
      <label className="login-form__label">Username</label>
      <input className="login-form__input" type="text" required />
      <label className="login-form__label">Password</label>
      <input className="login-form__input" type="password" required /> 

      <Button text="Login" mod="pink" /> 
    </form>
  ) 
}

export default LoginForm;
