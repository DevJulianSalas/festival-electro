import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//base styles
const theme = createMuiTheme({
  palette: {
    primary: { main: "#fafafa" }, 
    secondary: { main: '#11cb5f'}, 
  },
});


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme} style={{ textDecoration: 'none' }}>
        <div className="App" style={{ textDecoration: 'none' }}>
          <Header/>
          <Main/>
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
