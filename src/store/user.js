const initialState = {
  user: {
    id: 1,
    role: 'vendor',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZlbmRvciIsImlhdCI6MTY2OTA0OTQzNn0._mlRlgILhhPGFTvQcKHf5mKxVIKqNUQOcmUNi1kRYBo'
  },
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZlbmRvciIsImlhdCI6MTY2OTA0OTQzNn0._mlRlgILhhPGFTvQcKHf5mKxVIKqNUQOcmUNi1kRYBo',
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