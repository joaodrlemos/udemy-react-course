import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './blue-1.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const divRef = useRef('');
  const linksRef = useRef('');
  const [showLinks,setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  }

  useEffect(() => {
    const linksHeight = linksRef.current.clientHeight;

    if(showLinks){
      divRef.current.style.height = `${linksHeight}px`;
      // console.log(divRef.current.style.height);
      // console.log(showLinks);
    }
    else
    divRef.current.style.height = '0px';
      // console.log(divRef.current.style.height);
      // console.log(showLinks);
  }, [showLinks])

  return (
  <>
    <nav className=''>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo'/>
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container show-container' ref={divRef}>
          <ul className='links' ref={linksRef}>
            {links.map((linkItem) => {
              const {id, url,text} = linkItem;
              return (
                  <Link key={id} to={url} alt={text}>{text}</Link>
              );
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((socialItem) => {
            const {id,url,icon} = socialItem;
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  </>
  );
}

export default Navbar
