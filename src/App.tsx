import React from 'react';
// import './App.css';
import MyThemeProvider from './MyThemeProvider';
import HookThemeButton from './HookThemeButton';

function App() {
  return (
    <div className="App">
      <MyThemeProvider>
        <HookThemeButton />
      </MyThemeProvider>
    </div>
  );
}

export default App;
