import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'

const API_KEY_YOUTUBE = 'AIzaSyCT7J9JqXAJhO864KP2UeVu1FwfGpFIpEI';



class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: []};

        YTSearch({key: API_KEY_YOUTUBE, term: 'Surfboards'}, videos => {
        
            this.setState({videos});
        });
    }

    render() {
        return (<div><SearchBar /></div>);
    }
}

// Present the Generated HTML on the view
ReactDOM.render(<App />, document.querySelector(".container"));