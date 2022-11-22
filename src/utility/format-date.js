const splitDate = (dateStr) => {
  const dateArr = dateStr.split('-');
  const day = dateArr[2].split('T');
  dateArr[2] = day[0];
  return dateArr;
}

const returnMonthStr = (monthInt) => {
  switch(monthInt) {
    case '01': return 'January'
    case '02': return 'February'
    case '03': return 'March'
    case '04': return 'April'
    case '05': return 'May'
    case '06': return 'June'
    case '07': return 'July'
    case '08': return 'August'
    case '09': return 'September'
    case '10': return 'October'
    case '11': return 'November'
    case '12': return 'December'
    default: return 'Invalid Input';
  }
}

export const getFormattedString = (dateStr) => {
  const dateArr = splitDate(dateStr);
  const monthString = returnMonthStr(dateArr[1]);
  return `${monthString} ${dateArr[2]}, ${dateArr[0]}`;
}

export const getNumberDate = (dateStr) => {
  const dateArr = splitDate(dateStr);
  return dateArr.join(dateArr);
}
