var dataURL1 = require('./../../../feedData/URL1.json');
var dataURL2 = require('./../../../feedData/URL2.json');
export const SETURLCONST = 'setURL';
export const DELETEURLCONST = 'deleteURL';

export function setUrl(url) {
  return {
    type: SETURLCONST,
    payload: { url: url, data: url.toUpperCase() === 'URL1' ? dataURL1 : url.toUpperCase() === 'URL2' ? dataURL2 : null }
  }
}
export function deleteUrl(url) {
  return {
    type: DELETEURLCONST,
    payload: url
  }
}

