import axios from 'axios';

function getCreatePayload(obj) {
  const action = {
    type: `create_${obj.item}`,
    payload: obj
  }
  return action;
}

const createRequest = async (endpoint, guestObj) => {
  try {
    const response = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_SERVER}/${endpoint}`,
      data: guestObj,
    });
    return response.data;

  } catch (e) { console.log(e) }
}

function createGuest(endpoint, guestObj) {
  return async function (dispatch) {
    try {
      const createdGuest = await createRequest(endpoint, guestObj);
      return dispatch(getCreatePayload(createdGuest));
    } catch (e) {
      return console.log(e);
    }
  }
}

export default createGuest;