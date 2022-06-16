const hideHeader = (time = 700) => {
  const header = document.getElementById('header')
  setTimeout(() => {
    if (window.scrollY > header.scrollHeight) {
      header.style.top = '-90px';
    }
  }, time)
}

export default hideHeader;