import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list.js';
import VideoDetails from './components/video_details';

const API_KEY_YOUTUBE = 'AIzaSyCT7J9JqXAJhO864KP2UeVu1FwfGpFIpEI';



class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.onSearchTermChanged("Surfboards");        
    }

    onSearchTermChanged(term) {
        YTSearch({key: API_KEY_YOUTUBE, term}, videos => {
            this.setState(
                {
                    videos,
                    selectedVideo: videos[0]
                });
        });
    }

    render() {
        const videoSearchDebounce = _.debounce((term) => this.onSearchTermChanged(term), 300);

        return (
            <div>
               <SearchBar onSearchBarTermChanged={videoSearchDebounce} />
               <VideoDetails video={this.state.selectedVideo} />
               <VideoList videos={this.state.videos} onVideoSelect={(selectedVideo) => this.setState({selectedVideo})} />
            </div>);
    }
}

// Present the Generated HTML on the view
ReactDOM.render(<App />, document.querySelector(".container"));