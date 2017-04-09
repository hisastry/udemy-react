import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'

const API_KEY_YOUTUBE = 'AIzaSyCT7J9JqXAJhO864KP2UeVu1FwfGpFIpEI';

YTSearch({key: API_KEY_YOUTUBE, term: 'Surfboards'}, data => {
    console.log(data);
});

// Create a component that generates the HTML code
const App = () => (<div><SearchBar /></div>);

// Present the Generated HTML on the view
ReactDOM.render(<App />, document.querySelector(".container"));