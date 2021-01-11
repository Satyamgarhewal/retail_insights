import { React } from 'react';
import genderDropDown from './genderDropDown.css';

const GenderDropDown = (props) => {
  const genders = ['Male', 'Female', 'Other'];
  return (
    <div>
      <select
        name={props.name}
        id="gender"
        className="selectStyling"
        onChange={props.handleChange}
      >
        <option value="">Select Gender</option>
        {genders.map((gender, index) => {
          return (
            <option value={gender} name={props.name} key={index}>
              {gender}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default GenderDropDown;
