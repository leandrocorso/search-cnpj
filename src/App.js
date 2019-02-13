import React from 'react';
import Routes from './routes';
import ThemeProvider from 'styled-components';
import theme from './theme';

const App = () => (
    <Routes>
        <ThemeProvider theme={theme} />
    </Routes>
);

export default App;
