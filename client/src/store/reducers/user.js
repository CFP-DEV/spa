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
    default: {
      return state;
    }
  }
}

export const selectUser = (state, userID) => {
  return state[userID];
}

export default userReducer;