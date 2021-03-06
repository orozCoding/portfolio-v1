import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import items from "./MenuItems"
import './NavBar.css'
import { turnScrollOff, turnScrollOn } from "../../redux/appSlice";
import hideHeader from "../helpers";

const NavBar = () => {
  const [burgerClicked, setBurgerClicked] = useState(false)
  const dispatch = useDispatch();

  const unsetOverflowY = () => {
    if (window.innerWidth > 600) {
      setBurgerClicked(false);
      if ((document.body.style.overflowY = 'hidden')) {
        document.body.style.overflowY = 'unset';
      }
    }
  }

  useEffect(() => {
    const toggleScroll = () => {
      if (burgerClicked) {
        dispatch(turnScrollOff())
      } else if (!burgerClicked) {
        dispatch(turnScrollOn())
      }
    }
    toggleScroll();
    if (burgerClicked) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'unset'
    }
  }, [burgerClicked, dispatch])

  useEffect(() => {
    window.addEventListener('resize', unsetOverflowY);

    return (() => {
      window.removeEventListener('resize', unsetOverflowY);
    })
  })

  useEffect(() => {
    const navBarButtons = document.querySelectorAll('.nav-list li p')
    let maxScroll = document.body.scrollHeight;
    const scrollQuarter = maxScroll / 4;

    const worksRef = scrollQuarter - (scrollQuarter/1.4);
    const contactRef = scrollQuarter * 1.8;

    window.addEventListener('resize', () => {
      maxScroll = document.body.scrollHeight;
    })

    window.addEventListener('scroll', () => {
        maxScroll = document.body.scrollHeight;
      if (window.scrollY >= 0 && window.scrollY < worksRef) {
        navBarButtons[0].classList.add('active');
        navBarButtons[1].classList.remove('active');
        navBarButtons[2].classList.remove('active');
      } else if (window.scrollY >= worksRef && window.scrollY < contactRef) {
        navBarButtons[1].classList.add('active');
        navBarButtons[0].classList.remove('active');
        navBarButtons[2].classList.remove('active');
      } else if (window.scrollY > contactRef) {
        navBarButtons[2].classList.add('active');
        navBarButtons[0].classList.remove('active');
        navBarButtons[1].classList.remove('active');
      }
    })
  })

  const scrollTo = (refId) => {
    const ref = document.getElementById(`${refId}`)
    ref.scrollIntoView()
  }

  const renderItems = () => {
    return items.map((i, index) => {
      return (
        <li key={index} className={i.cName}
          onClick={() => {
            if (window.innerWidth <= 600) {
              setBurgerClicked(!burgerClicked);
            }
            scrollTo(i.refId)
            hideHeader();
          }}>
          <p>
            {i.title}
          </p>
        </li>
      );
    });
  }

  return (
    <div className='nav-ctn d-flex' >
      <i className={`nav-burger click
      bi bi-list
      ${burgerClicked ? 'clicked' : 'idle'}`}
        onClick={() => {
          setBurgerClicked(!burgerClicked);
        }}></i>
      <ul className={`nav-list d-flex
      ${burgerClicked ? 'active' : ''}`}>
        {renderItems()}
      </ul>
      <i className={`nav-ex click bi bi-x-lg ${burgerClicked ? 'active' : 'idle'}`}
        onClick={() => setBurgerClicked(!burgerClicked)}></i>
      <div className={`overlay
      ${burgerClicked ? 'active' : ''}`}
        onClick={() => setBurgerClicked(!burgerClicked)}>
      </div>
    </div>
  )
}

export default NavBar;