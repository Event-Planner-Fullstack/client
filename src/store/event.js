const initialState = {
  user_id: null,
  userEvents: [],
}



const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'get_all_event':
      state = {...state, userEvents: action.payload};
      return state;
    case 'create_event': 
      state = {...state, userEvents: [...state.userEvents, action.payload]};
      return state;
    case 'update_event':
      state = {...state, }

    default: return state;
  }
}

export default reducer;