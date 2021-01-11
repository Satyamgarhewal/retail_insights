import { React } from 'react';

const EmailTextField = (props) => {
  return (
    <div>
      <input
        type="email"
        className="form-control"
        id="email"
        name={props.name}
        htmlFor="email"
        placeholder="Email"
        onChange={props.handleChange}
        value={props.userDetails.email}
      />
    </div>
  );
};

export default EmailTextField;
