const querystring = require('querystring');
const API = 'http://39.108.48.155:3000/v1';

function baseFetch(path, obj) {
  let url;
  if (!obj) {
    url = `${API}${path}`;
  } else {
    url = `${API}${path}?${querystring.stringify(obj)}`;
  }

  return fetch(url)
    .then(res => res.json())
    .then(data => data)
    .catch(err => window.console.log(err));
}

// banner
export function fetchBanner() {
  return baseFetch('/banner');
}

// hot playlist
export function fetchRecommendPlaylist() {
  return baseFetch('/personalized');
}

// mobile login
export function mobileLogin(data) {
  return baseFetch('/login/cellphone', data);
}
