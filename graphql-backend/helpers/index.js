exports.dateToString = date => new Date(date).toISOString();

exports.arrayOfIntAverage = arr => { 
  if(arr && arr.length) {
    return Math.round(arr.reduce((a,b) => a + b, 0) / arr.length);
  } else return 0;
}
