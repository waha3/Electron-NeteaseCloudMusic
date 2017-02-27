import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import { Link } from 'react-router';

export default class MusicList extends Component {
  static propTypes = {
    lists: PropTypes.array.isRequired
  }

  render() {
    const { lists } = this.props;
    return (
      <div className="musiclist">
        <div className="top">
          <div className="col col_1">{''}</div>
          <div className="col col_2">操作</div>
          <div className="col col_3">音乐标题</div>
          <div className="col col_4">歌手</div>
          <div className="col col_5">专辑</div>
          <div className="col col_6">时长</div>
        </div>
        <div className="lists">
          {
            lists.map((v, i) => (
              <div key={i}>
                <div className="col_1">{ i > 9 ? i+1 : `0${i+1}` }</div>
                <div className="col_2"><span>L </span><span> D</span></div>
                <div className="col_3">{v.name}</div>
                <div className="col_4">
                  {
                    v.ar.map(value => value.name).join('/')
                  }
                </div>
                <div className="col_5"><Link to={`/album/${v.al.id}`}>{v.al.name}</Link></div>
                <div className="col_6">{moment(v.dt).format('mm:ss')}</div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
