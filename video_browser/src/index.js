import _ from 'lodash';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './component/search_bar';
import VideoList from './component/video_list';
import VideoDetail from './component/video_detail';

const YOUTUBE_API_KEY = 'AIzaSyBzysUfu0SpwzuLZrrjQtWfHlANultmjlU';

// Create a new component. THí component should produce some HTML
// Take this component's generated HTML and put it on the page (in the DOM)
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: YOUTUBE_API_KEY, term: term}, (videos) => {
      // this.setState({videos: videos});
      this.setState({videos});
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    console.log('render');
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          xxx="truongbt"
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        />
      </div>
    );
  }
}

// ReactDOM.render(App(), document.querySelector('.container'));
ReactDOM.render(<App/>, document.querySelector('.container'));