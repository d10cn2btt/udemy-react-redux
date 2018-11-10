import React, {Component} from 'react';

import VideoListItem from './video_list_item';

class VideoList extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    const videoItems = this.props.videos.map((video, key) => {
      return <VideoListItem
        video={video}
        key={video.etag}
        onVideoClick={this.props.onVideoSelect}
      />
    });

    return (
      <ul className="col-md-6 list-group">
        {videoItems}
      </ul>
    )
  }
}

export default VideoList;