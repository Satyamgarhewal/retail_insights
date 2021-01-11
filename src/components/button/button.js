import { React } from 'react';
const Button = (props) => {
  return (
    <div>
      <div className="offset-md-4">
        <button
          onClick={props.onClick}
          style={{ marginTop: 20, paddingLeft: 40, paddingRight: 40 }}
          className="btn btn-primary"
        >
          {props.value}
        </button>
      </div>
    </div>
  );
};

export default Button;
