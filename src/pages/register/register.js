// Libraries
import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import register from './register.css';
import { connect } from 'react-redux';

// components
import EmailTextField from '../../components/emailTextField/emailTextField';
import PasswordField from '../../components/passwordField/passwordField';
import GenderDropDown from '../../components/genderDropDown/genderDropDown';
import FullNameTextField from '../../components/fullNameTextField/fullNameTextField';
import Button from '../../components/button/button';
import ValidationError from '../../components/validationError/validationError';

// utils
import { stringConstants } from '../../utils/stringConstants';
import { bindActionCreators } from 'redux';

// actions
import { createUserDetails, createUser } from '../../actions/userDetailsAction';

const {
  CREATE_ACCOUNT,
  INVALID_NAME,
  INVALID_GENDER,
  INVALID_EMAIL,
  PASSWORD_CHARACTERS,
} = stringConstants;

const Register = (props) => {
  const [userDetails, setupUserDetails] = useState({
    fullName: '',
    email: '',
    password: '',
    gender: '',
  });
  useEffect(() => {
    const { createUserDetails, userDetails } = props;
    if (!userDetails) {
      createUserDetails();
    }
  });
  const [invalidName, setName] = useState(false);
  const [invalidEmail, setEmail] = useState(false);
  const [invalidGender, setGender] = useState(false);
  const [invalidPassword, setPassword] = useState(false);

  const handleUserDetails = (e) => {
    const { name, value } = e.target;
    const { fullName, email, gender, password } = userDetails;

    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

    if (name === 'gender') {
      setupUserDetails((userDetails.gender = value));
      if (gender.length) {
        setGender(false);
      }
    }
    if (name === 'fullName' && value.length >= 0) {
      setName(false);
    } else if (name === 'fullName' && value.length === 0) {
      setName(true);
    }
    if ((name === 'email' && emailRegex.test(value)) || email.length === 0) {
      setEmail(false);
    } else if (name === 'email' && !emailRegex.test(value)) {
      setEmail(true);
    }
    if (name === 'password' && value.length > 6) {
      setPassword(false);
    } else if (name === 'password' && value.length <= 6) {
      setPassword(true);
    }
    setupUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, gender, password } = userDetails;
    const { createUser } = props;
    if (!fullName.length) {
      setName(true);
    }
    if (!gender) {
      setGender(true);
    }
    if (!email.length) {
      setEmail(true);
    }
    if (!password.length) {
      setPassword(true);
    }
    if (
      fullName.length &&
      !invalidName &&
      gender.length &&
      email.length &&
      !invalidEmail &&
      password.length &&
      !invalidPassword
    ) {
      createUser(userDetails);
      setupUserDetails({
        ...userDetails,
        fullName: '',
        gender: '',
        email: '',
        password: '',
      });
      props.history.push('/home');
    }
  };

  return (
    <div>
      <div className="container" style={{ marginTop: 80 }}>
        <div className="row">
          <div className="col-md-6 offset-md-3 mb-0">
            <form onSubmit={handleSubmit}>
              <FullNameTextField
                name="fullName"
                handleChange={handleUserDetails}
                userDetails={userDetails.fullName}
              />
              {invalidName ? <ValidationError message={INVALID_NAME} /> : null}
              <GenderDropDown
                name="gender"
                handleChange={handleUserDetails}
                userDetails={userDetails.gender}
              />
              {invalidGender ? (
                <ValidationError message={INVALID_GENDER} />
              ) : null}
              <EmailTextField
                name="email"
                handleChange={handleUserDetails}
                userDetails={userDetails}
              />
              {invalidEmail ? (
                <ValidationError message={INVALID_EMAIL} />
              ) : null}
              <PasswordField
                name="password"
                placeholder="Password"
                handleChange={handleUserDetails}
                userDetails={userDetails.password}
              />
              {invalidPassword ? (
                <ValidationError message={PASSWORD_CHARACTERS} />
              ) : null}
              <div className="styleLink">
                Already have an account? <Link to="/login">Login</Link>
              </div>
              <Button onClick={handleSubmit} value={CREATE_ACCOUNT} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userDetails: state.userDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUserDetails: bindActionCreators(createUserDetails, dispatch),
    createUser: bindActionCreators(createUser, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Register);
