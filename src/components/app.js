import React, { Component } from 'react';
import SearchAppBar from './searchAppBar'
import PostCardContainer from './postCardContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchAppBar />
        <PostCardContainer />
      </div>
    );
  }
}

export default App;
