const initialState = {
  error: false,
  alreadyRSVP: false,
  createdGuest: {},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'create_guest':
      state = { ...state, createdGuest: action.payload }
    default: return state;
  }
}

export default reducer;