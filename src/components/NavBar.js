import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useAuth0 } from "@auth0/auth0-react";



function Navbar() {
  const { loginWithRedirect, isAuthenticated,logout } = useAuth0();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
            CAPSTONE
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
         
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/aboutus'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='http://surl.li/tnkah'
                target='_blank'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Documentation
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='http://127.0.0.1:7860/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>

            <li>
            {
                isAuthenticated ?(
                  <li>
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}className="signout-button">
      Sign Out
    </button>
    </li>
                ):(
                  <li>
                <button onClick={() => loginWithRedirect()}className="signin-button">Sign In</button>  
            </li>
                )} 
            </li> 
          </ul>  
        </div>
      </nav>
    </>
  );
}

export default Navbar;