const initialState = {
  users: [],
  isFetching: false,
  isFetched: false,
  error: null,
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default: {
      return state;
    }
  }
}

export default userReducer;