import { updateArray, addToArray, removeFromArray } from "../utility/change-array";

const initialState = {
  user_id: null,
  userVenues: [],
  selectedVenue: {},
}



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'get_all_venue':
      state = { ...state, userVenues: action.payload };
      return state;
    case 'create_venue':
      const arrWithNewVenue = addToArray(state.userVenues, action.payload);
      state = { ...state, userVenues: arrWithNewVenue };
      return state;
    case 'update_venue':
      const updatedArr = updateArray(state.userVenues, action.payload);
      state = { ...state, userVenues: updatedArr }
      return state;
    case 'delete_venue':
      const arrWithRemovedVenue = removeFromArray(state.userVenues, action.payload.id);
      state = { ...state, userVenues: arrWithRemovedVenue }
      return state;
    case 'change_selected_venue':
      return {...state, selectedVenue: action.payload}
    default: return state;
  }
}

export default reducer;