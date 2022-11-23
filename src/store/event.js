import { updateArray, addToArray, removeFromArray } from "../utility/change-array";

const initialState = {
  user_id: null,
  userEvents: [],
}



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'get_all_event':
      state = { ...state, userEvents: action.payload };
      return state;
    case 'create_event':
      const arrWithNewEvent = addToArray(state.userEvents, action.payload);
      state = { ...state, userEvents: arrWithNewEvent };
      return state;
    case 'update_event':
      const updatedArr = updateArray(state.userEvents, action.payload);
      state = { ...state, userEvents: updatedArr }
      return state;
    case 'delete_event':
      const arrWithRemovedEvent = removeFromArray(state.userEvents, action.payload.id);
      state = { ...state, userEvents: arrWithRemovedEvent }
      return state;
    default: return state;
  }
}

export default reducer;