const initialState = {
  guestList: [],
  rsvpError: false,
  rsvpSuccess: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'get_all_guest':
      state = { ...state, guestList: action.payload }
      return state;
    case 'change_rsvp_status':
      state = { ...state, rsvpError: action.payload.rsvpError, rsvpSuccess: action.payload.rsvpSuccess };
      return state;
    case 'create_guest':
      const error = action.payload ? false : true;
      state = { ...state, rsvpSuccess: action.payload.rsvpSuccess, rsvpError: action.payload.rsvpError }
    default: return state;
  }
}

export default reducer;