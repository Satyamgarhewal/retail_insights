import { typeConstants } from '../utils/typeConstants';

const { CREATE_USER_DATA, CREATE_USER } = typeConstants;

const userData = {
  fullName: '',
  gender: '',
  email: '',
  password: '',
};

const userDetails = (state = userData, action) => {
  switch (action.type) {
    case CREATE_USER_DATA: {
      return {
        ...state,
      };
    }
    case CREATE_USER: {
      return {
        ...state,
        fullName: action.payload.fullName,
        gender: action.payload.gender,
        email: action.payload.email,
        password: action.payload.password,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default userDetails;
