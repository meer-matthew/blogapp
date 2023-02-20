import { UserActions } from "../actions/UserActions";

const initialState = {
  user: {
    _id: "",
    name: "",
    emailAddress: "",
    birthDate: "",
    gender: "",
    address: "",
    profilePic: "",
    contactNo: "",
  },
  posts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActions.USER_LOGIN:
      console.log(action.payload);
      return {
        ...state,
        user: action.payload.user,
      };

    case UserActions.CREATE_USER:
      console.log(state);
      return {
        ...state,
        user: action.payload.user,
      };
    case UserActions.GET_USER:
      return {
        ...state,
        _id: action.payload._id,
      };
    case UserActions.UPDATE_USER:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.user.name,
          emailAddress: action.payload.user.emailAddress,
          birthDate: action.payload.user.birthDate,
          gender: action.payload.user.gender,
          address: action.payload.user.address,
          profilePic: action.payload.user.profilePic,
          contactNo: action.payload.user.contactNo,
        },
      };
    default:
      return state;
  }
};

export default reducer;
