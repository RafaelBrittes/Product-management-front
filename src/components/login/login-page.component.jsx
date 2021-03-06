import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { ButtonContainer, LoginContainer } from "./login-page.styles";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/auth";
import Register from "../register/register-page.component";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const { email, password } = formValues;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const clearFormFields = () => {
    setFormValues({ email: "", password: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password);
    
  };

  return (
    <LoginContainer>
      <h1>Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="email-input">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" value={email} onChange={handleChange} />
        </div>
        <div className="password-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <ButtonContainer>
          <Button type="submit">Login</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={clearFormFields}
          >
            CLEAR
          </Button>
        </ButtonContainer>
      </form>
      <Register/>
    </LoginContainer>
  );
};

export default Login;
