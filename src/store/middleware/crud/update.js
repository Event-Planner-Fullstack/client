import axios from 'axios';

function getUpdatePayload(obj) {
  console.log(obj.item);
  const action = {
    type: `update_${obj.item}`,
    payload: obj
  }
  return action;
}

const updateRequest = async (token, endpoint, body) => {
  try {
    const response = await axios({
      method: 'put',
      url: `${process.env.REACT_APP_SERVER}/${endpoint}`,
      headers: { "Authorization": `Bearer ${token}` },
      data: body,
    });
    return response.data;

  } catch (e) { console.log(e) }
}

function update(token, endpoint, body) {
  return async function (dispatch) {
    try {
      console.log(body);
      const record = await updateRequest(token, endpoint, body);
      console.log(record);
      return dispatch(getUpdatePayload(record));
    } catch (e) {
      return console.log(e);
    }
  }
}

export default update;