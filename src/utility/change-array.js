export const updateArray = (arr, obj) => {
  return arr.map(item => {
    if(item.id === obj.id) return obj
    else return item;
  })
}

export const removeFromArray = (arr, id) => {
  return arr.filter(item => item.id !== id);
}

export const addToArray = (arr, obj) => {
  return [...arr, obj];
}