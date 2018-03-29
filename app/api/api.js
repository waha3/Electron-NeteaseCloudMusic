const setPath = (path) => (target) => {
  target.path = path;
};

@setPath('http://127.0.0.1:40000')
export default class MusicApi {
  constructor() {
    this.path = null;
  }
  static getRecommendSongList() {
    return `${this.path}/personalized`;
  }

  static mobileLogin(cellphone, password) {
    return `${this.path}/login?${cellphone}&${password}`;
  }

  static getPlaylist(id) {
    return `${this.path}/playlist/detail?id=${id}`;
  }

  static getBanner() {
    return `${this.path}/banner`;
  }
}


