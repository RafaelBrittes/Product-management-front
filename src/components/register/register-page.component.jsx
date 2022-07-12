import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { ButtonContainer, LoginContainer } from "./register-page.styles";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const [formValues, setFormValues] = useState({name: "", email: "", password: "" });
  const { name, email, password } = formValues;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const clearFormFields = () => {
    setFormValues({name: "", email: "", password: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(name, email, password);
  };

  return (
    <LoginContainer>
      <h1>Create new account:</h1>
      <form className="form" onSubmit={handleSubmit}>
      <div className="name-input">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={handleChange} />
        </div>
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
          <Button type="submit">Sign up</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={clearFormFields}
          >
            CLEAR
          </Button>
        </ButtonContainer>
      </form>
    </LoginContainer>
  );
};

export default Register;
