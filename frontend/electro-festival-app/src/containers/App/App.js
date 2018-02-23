import React from 'react';
import Header from '../../components/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



const App = () => (
    <div>
        <MuiThemeProvider>
            <Header/>
        </MuiThemeProvider>
    </div>
)
export default App;