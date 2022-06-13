import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import Header from './components/Header/Header';
import { selectScrollStatus } from './redux/appSlice';
import About from './sections/About';
import Works from './sections/Works';
import Contact from './sections/Contact';
import './App.css';

function App() {

  const scrollStatus = useSelector(selectScrollStatus)

  return (
    <div id='app-ctn' className={`app-ctn 
    ${scrollStatus ? '' : 'no-scroll'}`}>
      <Header />
      <div className="header-placeholder"></div>
      <div className="sections-ctn d-flex col">
        <About />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
