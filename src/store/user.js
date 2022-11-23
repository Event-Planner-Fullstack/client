const initialState = {
  user: {
    id: 0,
    role: '',
    token: ''
  },

  token: '',
  isAuthenticated: false,
  loginError: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'login':
      state = { user: action.payload.user, token: action.payload.token, isAuthenticated: true }
      return state;
    case 'logout':
      state = initialState;
      return state;
    case 'change_error_status':
      const status = action.payload;
      state = { ...state, loginError: status}
      return state;
    default: return state
  }
}

export default reducer;