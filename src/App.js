import React from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="app-ctn">
      <Header />
      <p>bellow header</p>
      <div style={{'minHeight': '100vh'}}></div>
      <p style={{'minHeight': '100vh'}}>Very far!</p>
      <p>Very far again!!</p>
    </div>
  );
}

export default App;
