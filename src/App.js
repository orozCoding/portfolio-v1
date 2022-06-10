import React from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {

  return (
    <div className="app-ctn">
      <Header  />
      <p >bellow header</p>
      <section style={{ 'minHeight': '100vh' }}></section>
      <section  style={{ 'minHeight': '100vh' }}>Very far!</section>
      <section id={'again'}
      style={{ 'minHeight': '100vh' }}>About</section>
    </div>
  );
}

export default App;
