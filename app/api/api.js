import 'isomorphic-fetch';

const setPath = (path) => (target) => {
  target.path = path;
};

@setPath('http://127.0.0.1:4000')
export default class MusicApi {
  constructor() {
    this.path = null;
  }
  static getRecommendSongList() {
    return fetch(`${this.path}/personalized`);
  }

  static mobileLogin(cellphone, password) {
    return `/login?${cellphone}&${password}`;
  }

  static getPlaylist(id) {
    return fetch(`${this.path}/playlist/detail?id=${id}`);
  }

  static getBanner() {
    return fetch(`${this.path}/banner`);
  }
}


