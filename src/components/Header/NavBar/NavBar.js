import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import items from "./MenuItems"
import './NavBar.css'
import { turnScrollOff, turnScrollOn } from "../../../redux/appSlice"

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

    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        navBarButtons[0].classList.remove('active')
        navBarButtons[1].classList.remove('active')
        navBarButtons[2].classList.remove('active')
      } else if (window.scrollY >= 105 && window.scrollY < 380) {
        navBarButtons[0].classList.add('active')
        navBarButtons[1].classList.remove('active')
        navBarButtons[2].classList.remove('active')
      } else if (window.scrollY >= 380 && window.scrollY < 1211) {
        navBarButtons[1].classList.add('active')
        navBarButtons[0].classList.remove('active')
        navBarButtons[2].classList.remove('active')
      } else if (window.scrollY >= 1211) {
        navBarButtons[2].classList.add('active')
        navBarButtons[0].classList.remove('active')
        navBarButtons[1].classList.remove('active')
      }
    })
  })

  const scrollTo = (refId) => {
    const ref = document.getElementById(`${refId}`)
    ref.scrollIntoView()
  }

  const hideHeader = () => {
    const header = document.getElementById('header')
    setTimeout(() => {
      if (window.scrollY > 80) {
        header.style.top = '-90px';
      }
    }, 700)
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
    <div className='nav-ctn d-flex'>
      <i className={`nav-burger click
      ${burgerClicked ? 'bi bi-x-lg' : 'bi bi-list'}`}
        onClick={() => {
          setBurgerClicked(!burgerClicked);
        }}></i>
      <ul className={`nav-list d-flex
      ${burgerClicked ? 'active' : ''}`}>
        {renderItems()}
      </ul>
      <div className={`overlay
      ${burgerClicked ? 'active' : ''}`}
        onClick={() => setBurgerClicked(!burgerClicked)}>
      </div>
    </div>
  )
}

export default NavBar;