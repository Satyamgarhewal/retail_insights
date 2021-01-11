import { React } from 'react';
import styled from 'styled-components';

const StyledValidation = styled.p`
  font-size: 10px;
  color: red;
  font-weight: 500;
  margin-top: 5px;
`;
const ValidationError = (props) => {
  return (
    <div>
      <StyledValidation>{props.message}</StyledValidation>
    </div>
  );
};

export default ValidationError;
