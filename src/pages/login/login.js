// libraries
import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// components
import EmailTextField from '../../components/emailTextField/emailTextField';
import PasswordField from '../../components/passwordField/passwordField';
import Button from '../../components/button/button';
import ValidationError from '../../components/validationError/validationError';

//utils
import { stringConstants } from '../../utils/stringConstants';
const {
  LOGIN,
  NOT_REGISTERED,
  INVALID_CREDS,
  INVALID_EMAIL,
  INVALID_PASSWORD,
  REGISTER_HERE,
} = stringConstants;

// Styled Components
const SignUp = styled.p`
  margin-top: 20px;
  font-size: 15px;
  text-align: center;
`;

const InvalidEmail = styled.p`
  font-size: 10px;
  color: red;
  font-weight: 500;
  margin-top: 5px;
`;

// function component
const Login = (props) => {
  const [userDetails, setupUserDetails] = useState({
    email: '',
    password: '',
  });
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [invalidEmailPassword, setAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userDetails.password.length || !userDetails.email.length) {
      if (!userDetails.password.length) {
        setInvalidPassword(true);
      }
      if (!userDetails.email.length) {
        setInvalidEmail(true);
      }
    } else if (
      userDetails.email === 'root@gmail.com' &&
      userDetails.password === 'rootuser'
    ) {
      props.history.push('/home');
    } else if (userDetails.email.length && userDetails.password.length) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
      setupUserDetails({ ...userDetails, email: '', password: '' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
      if (!emailRegex.test(value)) {
        if (value.length === 0) {
          setInvalidEmail(false);
        } else {
          setInvalidEmail(true);
        }
      } else if (emailRegex.test(value)) {
        setInvalidEmail(false);
      }
    } else if (name === 'password') {
      if (value.length) {
        setInvalidPassword(false);
      }
    }
    setupUserDetails({ ...userDetails, [name]: value });
  };

  return (
    <div className="container" style={{ marginTop: 100 }}>
      <div className="row">
        <div className="col-md-7 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div>
              <div className="col-sm-10">
                <EmailTextField
                  handleChange={handleInputChange}
                  userDetails={userDetails}
                  name="email"
                />
                {invalidEmail ? (
                  <ValidationError message={INVALID_EMAIL} />
                ) : null}
                <PasswordField
                  name="password"
                  handleChange={handleInputChange}
                  userDetails={userDetails.password}
                  name="password"
                  placeholder="Password"
                />
                {invalidPassword ? (
                  <ValidationError message={INVALID_PASSWORD} />
                ) : null}
                <SignUp>
                  {NOT_REGISTERED} <Link to="/">{REGISTER_HERE}</Link>
                </SignUp>
                <Button onClick={handleSubmit} value={LOGIN} />
                {invalidEmailPassword ? (
                  <div
                    className="alert alert-warning"
                    style={{ marginTop: 20 }}
                    role="alert"
                  >
                    <b>{INVALID_CREDS}</b>
                  </div>
                ) : null}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
