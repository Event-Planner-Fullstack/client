const initialState = {
  error: false,
  alreadyRSVP: false,
  guestList: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'get_all_guest':
      state = { ...state, guestList: action.payload }
    default: return state;
  }
}

export default reducer;