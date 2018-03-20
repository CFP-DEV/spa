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
    default: {
      return state;
    }
  }
}

export const selectUser = (state, userID) => {
  return state.filter(user => user.id === parseInt(userID, 10))[0];
}

export default userReducer;