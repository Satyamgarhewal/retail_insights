import { typeConstants } from '../utils/typeConstants';

const { CREATE_USER_DATA, CREATE_USER } = typeConstants;
export const createUserDetails = () => {
  return (dispatch) => {
    dispatch({
      type: CREATE_USER_DATA,
    });
  };
};

export const createUser = (data) => {
  return async (dispatch) => {
    dispatch({
      type: CREATE_USER,
      payload: data,
    });
  };
};
