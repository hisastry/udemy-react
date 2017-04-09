import React from 'react';
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY_YOUTUBE = 'AIzaSyCT7J9JqXAJhO864KP2UeVu1FwfGpFIpEI';

// Create a component that generates the HTML code
const App = () => (<div><SearchBar /></div>);

// Present the Generated HTML on the view
ReactDOM.render(<App />, document.querySelector(".container"));