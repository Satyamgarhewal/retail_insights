import { React } from 'react';

const PasswordField = (props) => {
  return (
    <div>
      <input
        style={{ marginTop: 20 }}
        type="password"
        className="form-control"
        id="password"
        name={props.name}
        htmlFor="password"
        placeholder={props.placeholder}
        value={props.userDetails}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default PasswordField;
