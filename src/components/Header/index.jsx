import { ReactComponent as Hamburguer } from './../../imgs/icon-hamburger.svg';
import { ReactComponent as Logo } from './../../imgs/logo.svg';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const HeaderWrapper = styled.header`
  width: 100%;
  padding: 30px 20px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 550px) {
    width: 50%;
  }
  @media only screen and (min-width: 768px) {
    width: 90%;
    justify-content: space-evenly;
  }
  @media only screen and (min-width: 1024px) {
    width: 78%;
  }
`;

const HamburguerWrapper = styled.div`
  position: absolute;
  left: 20px;
  padding: 10px;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const LogoWrapper = styled.div``;

const NavWrapper = styled.div`
  width: 100%;
  height: ${window.innerHeight}px;
  position: absolute;
  top: 0;
  left: 0;

  @media only screen and (min-width: 550px) {
    width: 100vw;
  }

  @media only screen and (min-width: 768px) {
    height: auto;
    padding-left: 10px;
    position: static;
  }
`;

const CloseBtn = styled.button`
  padding: 0px 20px 0px 30px;
  border: none;
  font-size: 1.5rem;
  color: #a8a8a8;
  background-color: transparent;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  background: white;

  @media only screen and (min-width: 550px) {
    width: 50%;
  }

  @media only screen and (min-width: 768px) {
    background-color: transparent;
  }
`;

const NavLinks = styled.ul`
  width: 100%;
  padding: 30px 10px;
  display: flex;
  justify-content: space-around;
  list-style: none;

  @media only screen and (min-width: 768px) {
    padding: 0;
  }
`;

const Link = styled.a`
  &:link,
  &:visited,
  &:active {
    color: #171717;
    text-decoration: none;
  }

  @media only screen and (min-width: 768px) {
    &:link,
    &:visited,
    &:active {
      color: #fff;
    }
  }
`;

const Header = () => {
  let [display, setDisplay] = useState(false);
  let [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    window.addEventListener('load', handleDesktopMenu);
    window.addEventListener('resize', handleDesktopMenu);
    window.addEventListener('click', (e) => {
      const targetName = `${e.target.className}`;
      if (targetName.includes(NavWrapper.componentStyle.componentId)){
        setDisplay(false);
        setIsShowing(false);
      }
    })
  }, []);
  
  useEffect(() => {
    const handleMobileMenu = () => {
      if (window.innerWidth <= 768) {
        if (!isShowing) {
          setDisplay(false);
        }
      }
    }
    window.addEventListener('resize', handleMobileMenu);
    return () => {
      window.removeEventListener('resize', handleMobileMenu);
    }
  }, [isShowing])

  const handleDisplayMenu = (e) => {
    const targetName = `${e.target.className}`;
    if (targetName.includes(CloseBtn.componentStyle.componentId)) {
      setDisplay(false);
      setIsShowing(false);
    } else {
      setDisplay(!display);
      setIsShowing(!display);
    }
  };
  
  const handleDesktopMenu = () => {
    if (window.innerWidth > 768) {
      setDisplay(true);
    } 
  };

  return (
    <HeaderWrapper>
      <HamburguerWrapper onClick={handleDisplayMenu}>
        <Hamburguer fill="#000" />
      </HamburguerWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      {display && (
        <NavWrapper>
          <Nav>
            <CloseBtn onClick={handleDisplayMenu}>X</CloseBtn>
            <NavLinks>
              <li className="nav-item">
                <Link href="#" target="_blank" className="nav-link">
                  home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" target="_blank" className="nav-link">
                  shop
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" target="_blank" className="nav-link">
                  about
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" target="_blank" className="nav-link">
                  contact
                </Link>
              </li>
            </NavLinks>
          </Nav>
        </NavWrapper>
      )}
    </HeaderWrapper>
  );
};

export { Header };
