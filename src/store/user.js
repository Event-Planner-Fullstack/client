const initialState = {
  user: {
    id: 1,
    role: 'vendor',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE2Njg4MTgzOTd9.XUAcA-JWCOzcJKCPN4J04NWXlr4BJhg1_vCt9lmsbfA'
  },
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE2Njg4MTgzOTd9.XUAcA-JWCOzcJKCPN4J04NWXlr4BJhg1_vCt9lmsbfA',
  isAuthenticated: true,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'login':
      state = { user: action.payload.user, token: action.payload.token, isAuthenticated: true }
      return state;
    case 'logout':
      state = initialState;
      return state;
    default: return state
  }
}

export default reducer;