const API = 'https://api.imjad.cn/cloudmusic/';

function baseFetch(type, id) {
  return fetch(`${API}?type=${type}&id=${id}`)
    .then(res => res.json())
    .then(data => data)
    .catch(err => window.console.log(err));
}

// song
export function fetchSong(id) {
  return baseFetch('song', id);
}

// lyric
export function fetchLyric(id) {
  return baseFetch('lyric', id);
}

// comments
export function fetchComments(id) {
  return baseFetch('comments', id);
}

// detail
export function fetchDetail(id) {
  return baseFetch('detail', id);
}

// artist
export function fetchArtist(id) {
  return baseFetch('artist', id);
}

// album
export function fetchAlbum(id) {
  return baseFetch('album', id);
}

// playlist
export function fetchPlaylist(id) {
  return baseFetch('playlist', id);
}

// MV
export function fetchMV(id) {
  return baseFetch('mv', id);
}

// djradio
export function fetchDjradio(id) {
  return baseFetch('djradio', id);
}

// dj
export function fetchDj(id) {
  return baseFetch('dj', id);
}

// detail_dj
export function fetchDetailDj(id) {
  return baseFetch('detail_dj', id);
}
