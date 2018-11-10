import React, {Component} from 'react';

class VideoListItem extends Component {
  constructor(props) {
    super(props);
  }

  clickVideo(video) {
    this.props.onVideoClick(video)
  }

  render() {
    const title = this.props.video.snippet.channelTitle;
    const imgUrl = this.props.video.snippet.thumbnails.default.url;

    return (
      <li onClick={() => this.clickVideo(this.props.video)} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img src={imgUrl} alt="" className="media-object"/>
          </div>
          <div className="media-body">
            <div className="media-heading">{title}</div>
          </div>
        </div>
      </li>
    )
  }
}

export default VideoListItem;