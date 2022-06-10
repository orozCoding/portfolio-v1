import React from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {

  return (
    <div className="app-ctn">
      <Header />
      <p >bellow header</p>
      <section id={'about'}
      style={{ 'minHeight': '100vh' }}>About</section>
      <section id={'works'}
      style={{ 'minHeight': '100vh' }}>Works</section>
      <section id={'contact'}
        style={{ 'minHeight': '100vh' }}>Contact</section>
    </div>
  );
}

export default App;
