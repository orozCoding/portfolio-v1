import React, { useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';
import Header from './components/Header/Header';
import { selectScrollStatus } from './redux/appSlice';
import About from './sections/About';
import Works from './sections/Works';
import Contact from './sections/Contact';
import './App.css';

// AOS animation

import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {

  const scrollStatus = useSelector(selectScrollStatus)

  useEffect(() => {
    AOS.init();
  }, []);

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
