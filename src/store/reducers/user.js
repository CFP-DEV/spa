const initialState = {
  users: [],
  isFetching: false,
  isFetched: false,
  error: null,
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_USERS_PENDING': {
      return {...state, isFetching: true};
    }
    case 'FETCH_USERS_FULFILLED': {
      return {...state, isFetching: false, isFetched: true, users: payload};
    }
    case 'FETCH_USERS_REJECTED': {
      return {...state, isFetching: false, error: payload};
    }
    case 'UPDATE_USER_FULFILLED': {
      let updatedUsers = state.users.map(user => user.id === payload.id ? payload : user);

      return {...state, users: updatedUsers}
    }
    case 'DELETE_USER_FULFILLED': {
      let updatedUsers = state.users.filter(user => user.id !== parseInt(payload, 10));

      return { ...state, users: updatedUsers }
    }
    case 'CREATE_USER_FULFILLED': {
      return { ...state, users: [...state.users, payload]}
    }
    default: {
      return state;
    }
  }
}

export const selectUser = (state, userID) => {
  let result = state.filter(user => user.id === parseInt(userID, 10))[0];

  return result ? result : false;
}

export default userReducer;