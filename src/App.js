import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import Header from './components/Header/Header';
import { selectScrollStatus } from './redux/appSlice';
import './App.css';

function App() {

  const scrollStatus = useSelector(selectScrollStatus)

  return (
    <div id='app-ctn' className={`app-ctn 
    ${scrollStatus ? '' : 'no-scroll'}`}>
      <Header />
      <p >bellow header</p>
      <section id={'about'}
      style={{ 'minHeight': '100vh', 'margin-top': '80px' }}>About</section>
      <section id={'works'}
      style={{ 'minHeight': '100vh' }}>Works</section>
      <section id={'contact'}
        style={{ 'minHeight': '100vh' }}>Contact</section>
    </div>
  );
}

export default App;
