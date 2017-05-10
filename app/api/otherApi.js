const API = 'http://39.108.48.155:3000/v1';

function baseFetch(path, type, id) {
  let url;
  if (!type) {
    url = `${API}${path}`;
  } else {
    url = `${API}${path}?type=${type}&id=${id}`;
  }

  return fetch(url)
    .then(res => res.json())
    .then(data => data)
    .catch(err => window.console.log(err));
}

export function fetchBanner() {
  return baseFetch('/banner');
}

export function fetchRecommendPlaylist() {
  return baseFetch('/personalized');
}
