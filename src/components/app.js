import React, { Component } from 'react';
import SearchAppBar from './searchAppBar'
import PostCardContainer from './postCardContainer'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { grey, blue, red } from '@material-ui/core/colors'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    isDark: state.postsReducer.isDark
  }
}

const lightTheme = createMuiTheme({
    palette: {
        main: grey[500],
        background: '#fff',
        text: '#333',
        primaryColor: blue[400],
        iconColor: '#999',
        accentBackground: '#efefef'
    },
    boxShadow: '0 5px 40px -20px rgba(40,44,63,.15)'
})

const darkTheme = createMuiTheme({
    palette: {
        main: grey[500],
        background: '#222',
        text: '#fff',
        primaryColor: blue[400],
        iconColor: red[600],
        accentBackground: grey[800]
    },
    boxShadow: '0 5px 40px -20px #000'
})


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={this.props.isDark ? darkTheme : lightTheme}>
        <div>
          <SearchAppBar />
          <PostCardContainer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(mapStateToProps)(App);
