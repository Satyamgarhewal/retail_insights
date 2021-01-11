import { React } from 'react';

const FullNameTextField = (props) => {
  return (
    <div>
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          id="fullName"
          placeholder="Full name"
          name={props.name}
          htmlFor="fullName"
          value={props.userDetails}
          onChange={props.handleChange}
        />
      </div>
    </div>
  );
};

export default FullNameTextField;
