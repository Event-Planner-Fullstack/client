const initialState = {
  guest_modal: false,
  add_venue_modal: false,
  edit_venue_modal: false,
  add_event_modal: false,
  edit_event_modal: false,

}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'guest_modal':
      const showGuestModal = state.guest_modal ? false : true;
      return { ...state, guest_modal: showGuestModal };
    case 'add_venue_modal':
      const showAddVenue = state.add_venue_modal ? false : true;
      return { ...state, add_venue_modal: showAddVenue };
    case 'edit_venue_modal':
      const showEditVenue = state.edit_venue_modal ? false : true;
      return { ...state, edit_venue_modal: showEditVenue };
    case 'add_event_modal':
      const addEventModal = state.add_event_modal ? false : true;
      return { ...state, add_event_modal: addEventModal };
    case 'edit_venue_modal':
      const editEventModal = state.edit_event_modal ? false : true;
      return { ...state, edit_event_modal: editEventModal };
    default: return state;
  }
}

export default reducer;