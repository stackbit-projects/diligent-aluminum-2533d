import React, { useCallback, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import NavSubMenuLink from './NavSubMenuLink'

// Hide all except signup button, show menu when cursor is close

const NavigationInner = styled.div`
  width: 100%;
  height: 100%;
  max-width: 97rem;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`

const LogoContainer = styled.div`
  font-size: 0;
  transition: opacity 200ms, transform 200ms;
  position: relative;

  svg {
    height: 2rem;
    width: auto;
  }
`

const ButtonShared = css`
  font-weight: 600;
  height: 3rem;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.125rem;
  outline: none;
  cursor: pointer;
  position: relative;
`

const AccountContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const LogInButton = styled.button`
  ${ButtonShared}
  border: 2px solid #E9E8ED;
  color: #5a4cdb;
  background: none;
  margin-right: 1rem;
  border-radius: 1px;
  transition: border-color 100ms, opacity 200ms 100ms, transform 200ms 100ms;

  &:hover,
  &:focus,
  &:active {
    border-color: #5a4cdb;
  }
`

const SignUpButton = styled.button`
  ${ButtonShared}
  border: none;
  color: #ffffff;
  background: #211e4f;
  border-radius: 30px;
  transition: background 100ms;
  box-shadow: white 0 0 0 0.25rem;

  &:hover,
  &:focus,
  &:active {
    background: #5a4cdb;
  }
`

const PrimaryNavLink = styled.a`
  color: #211e4f;
  transition: color 100ms;
  text-decoration: none;
  padding: 0 1rem;
  line-height: 5rem;
  display: flex;
  justify-content: center;
  position: relative;

  &:hover,
  &:focus,
  &:active {
    color: #5a4cdb;
  }
`

const NavLinks = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity 200ms 50ms, transform 200ms 50ms;
  align-items: center;
  justify-content: center;
`

const PrimaryNavList = styled.ul`
  font-size: 1.125rem;
  display: flex;
  transition: opacity 200ms 50ms, transform 200ms 50ms;

  li {
    margin: 0;
  }
`

const SubMenu = styled.div`
  width: 70rem;
  height: 14rem;
  position: absolute;
  top: 5rem;
  /* background: #ff000022; */

  pointer-events: none;
  opacity: 0;

  &.active {
    pointer-events: initial;
    opacity: 1;
  }
`

const SubMenuArrow = styled.div`
  position: absolute;
  width: 1rem;
  height: 1rem;
  top: -0.5rem;
  left: 0;
  transform: rotate(45deg);
  background: #211e4f;
  border-top-left-radius: 0.25rem;

  pointer-events: none;
  /* opacity: 0; */
  transition: opacity 100ms;

  &.active {
    opacity: 1;
  }
`

const SubMenuLinks = styled.ul`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  z-index: 1;

  pointer-events: none;
  opacity: 0;
  transition: opacity 100ms;

  &.active {
    pointer-events: initial;
    opacity: 1;
    transition: opacity 200ms 200ms;
  }

  li {
    display: block;
    a {
      width: 14rem;
      height: 14rem;
      padding: 0;
      text-decoration: none;
      text-align: center;
      background: rgba(33, 30, 79, 15%); /* This is gonna be a video */
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      color: white;

      &:hover {
        video {
          opacity: 1;
        }

        span::before {
          opacity: 1;
        }
      }

      span {
        display: block;
        padding: 2rem 1rem 1rem;
        font-size: 1.125rem;
        width: 100%;
        position: relative;

        &:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
          z-index: -1;
          background: linear-gradient(0deg, rgba(33, 30, 79, 0.8) 0%, rgba(33, 30, 79, 0.6) 65.51%, rgba(33, 30, 79, 0) 100%);
          opacity: 0;
          transition: opacity 200ms;
        }
      }

      video {
        transition: opacity 200ms;
        width: 100%;
        position: absolute;
        opacity: 0.15;
        z-index: -1;
      }
    }
  }
`

const SubMenuBackdrop = styled.div`
  width: 14rem;
  height: 14rem;
  background: #211e4f;
  position: absolute;
  transform-origin: 0 0;
  left: 0;
  top: 0;
  transition: transform 300ms;
  will-change: transform;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.3);
`

const NavigationWrapper = styled.nav`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  &::before {
    content: '';
    background: white;
    display: block;
    height: 5rem;
    width: 100%;
    position: absolute;
    z-index: 0;
    opacity: 0;
    transition: opacity 300ms, box-shadow 1500ms;
  }

  &.hide:hover::before {
    box-shadow: 0 0 1.5rem 0 #00000022;
    opacity: 1;
  }

  &.hide:not(:hover) {
    ${NavLinks} {
      opacity: 0;
      transform: translate(-50%, -1.5rem);
      pointer-events: none;
    }
    ${LogoContainer},
    ${LogInButton} {
      opacity: 0;
      transform: translateY(-1.5rem);
    }
  }

  &:hover ${SubMenu} {
    /* opacity: 1; */
    pointer-events: initial;
  }

  * {
    /* background: #ff000022; */
  }
`

// We'd use a links.length for this in practice
function getBDS(h) {
  switch (h) {
    case 1:
    case 2:
      return 5
    case 3:
      return 3
    case 6:
    case 4:
      return 2
    default:
      return 1
  }
}

export const Nav = ({ hide }) => {
  const [hovered, setHov] = useState({ h: -1, t: false, bds: 1 })
  const [dimens, setDimens] = useState({ widths: [], lefts: [], fullNav: 0 })
  const fullNavWidth = dimens.widths.reduce((a, b) => a + b, 0)
  const REM = parseFloat(getComputedStyle(document.documentElement).fontSize)

  const [el, setEl] = useState()
  const ref = useCallback((element) => {
    setEl(element)
  }, [])

  // We want the useEffect to run if width changes
  const ulWidth = el?.getBoundingClientRect().width
  useEffect(() => {
    if (el) {
      const widths = []
      const lefts = []
      const parentLeft = el.getBoundingClientRect().left
      Object.keys(el.children).map((a) => {
        lefts.push(el.children[a].getBoundingClientRect().left - parentLeft + el.children[a].getBoundingClientRect().width / 2)
        widths.push(el.children[a].getBoundingClientRect().width)
      })
      setDimens({ lefts, widths })
    }
  }, [el, ulWidth])

  function setHovered(h) {
    // 0 maintains the position of previous element, when user continues hovering nav
    // -1 is when the user completely leaves the nav
    setHov({
      h,
      t: !(hovered.h === -1 || h === -1),
      bds: h <= 0 ? hovered.bds : getBDS(h),
    })
  }
  const hoverWidth = ((hovered.bds * 14) / 2 - 0.5) * REM - fullNavWidth / 2 > 0

  return (
    <NavigationWrapper className={hide ? 'hide' : ''}>
      <NavigationInner>
        <LogoContainer>
          <svg width="174" height="33" viewBox="0 0 174 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M151.602 16.002H146.549V25.2665H151.602V16.002Z" fill="#A260D4" />
            <path
              d="M151.602 16.0028H146.549C146.549 13.6802 144.66 11.7917 142.338 11.7917C140.015 11.7917 138.127 13.6802 138.127 16.0028H133.073C133.073 10.8952 137.23 6.73828 142.338 6.73828C147.445 6.73828 151.602 10.8952 151.602 16.0028Z"
              fill="#A260D4"
            />
            <path
              d="M138.127 16.0028H133.073C133.073 13.6802 131.185 11.7917 128.862 11.7917C126.54 11.7917 124.651 13.6802 124.651 16.0028H119.598C119.598 10.8952 123.755 6.73828 128.862 6.73828C133.97 6.73828 138.127 10.8952 138.127 16.0028Z"
              fill="#5A4CDB"
            />
            <path
              d="M95.453 16.0028H90.3996C90.3996 13.6802 88.5111 11.7917 86.1884 11.7917C83.8657 11.7917 81.9772 13.6802 81.9772 16.0028H76.9238C76.9238 10.8952 81.0807 6.73828 86.1884 6.73828C91.2961 6.73828 95.453 10.8952 95.453 16.0028Z"
              fill="#A260D4"
            />
            <path
              d="M46.8847 25.2674C41.777 25.2674 37.6201 21.1105 37.6201 16.0028C37.6201 10.8952 41.777 6.73828 46.8847 6.73828C51.9924 6.73828 56.1492 10.8952 56.1492 16.0028C56.1492 21.1105 51.9924 25.2674 46.8847 25.2674ZM46.8847 11.7917C44.562 11.7917 42.6735 13.6802 42.6735 16.0028C42.6735 18.3255 44.562 20.214 46.8847 20.214C49.2074 20.214 51.0958 18.3255 51.0958 16.0028C51.0958 13.6802 49.2074 11.7917 46.8847 11.7917Z"
              fill="#5A4CDB"
            />
            <path
              d="M164.235 25.2674C159.128 25.2674 154.971 21.1105 154.971 16.0028C154.971 10.8952 159.128 6.73828 164.235 6.73828C169.343 6.73828 173.5 10.8952 173.5 16.0028C173.5 21.1105 169.343 25.2674 164.235 25.2674ZM164.235 11.7917C161.913 11.7917 160.024 13.6802 160.024 16.0028C160.024 18.3255 161.913 20.214 164.235 20.214C166.558 20.214 168.446 18.3255 168.446 16.0028C168.446 13.6802 166.558 11.7917 164.235 11.7917Z"
              fill="#468BE8"
            />
            <path
              d="M106.964 25.2674C101.856 25.2674 97.6992 21.1105 97.6992 16.0028C97.6992 10.8952 101.856 6.73828 106.964 6.73828C112.071 6.73828 116.228 10.8952 116.228 16.0028C116.228 21.1105 112.071 25.2674 106.964 25.2674ZM106.964 11.7917C104.641 11.7917 102.753 13.6802 102.753 16.0028C102.753 18.3255 104.641 20.214 106.964 20.214C109.286 20.214 111.175 18.3255 111.175 16.0028C111.175 13.6802 109.286 11.7917 106.964 11.7917Z"
              fill="#5A4CDB"
            />
            <path d="M23.5827 0H18.5293V25.267H23.5827V0Z" fill="#468BE8" />
            <path d="M33.1269 0H28.0742V5.05263H33.1269V0Z" fill="#5A4CDB" />
            <path d="M81.9772 0H76.9238V25.267H81.9772V0Z" fill="#5A4CDB" />
            <path d="M160.024 6.73828H154.971V32.0053H160.024V6.73828Z" fill="#5A4CDB" />
            <path d="M33.1276 6.73828H28.0742V25.2674H33.1276V6.73828Z" fill="#5A4CDB" />
            <path d="M116.228 6.73828H111.175V25.2674H116.228V6.73828Z" fill="#468BE8" />
            <path d="M95.4528 16.002H90.3994V25.2665H95.4528V16.002Z" fill="#A260D4" />
            <path d="M138.127 16.002H133.073V25.2665H138.127V16.002Z" fill="#5A4CDB" />
            <path d="M124.651 16.002H119.598V25.2665H124.651V16.002Z" fill="#5A4CDB" />
            <path d="M42.6735 6.73828H37.6201V32.0053H42.6735V6.73828Z" fill="#A260D4" />
            <path
              d="M9.26456 25.2674C6.79027 25.2674 4.46384 24.3035 2.71386 22.5535C0.963889 20.8036 0 18.4771 0 16.0028C0 13.5286 0.963889 11.2021 2.71386 9.45214C4.46384 7.70217 6.79027 6.73828 9.26456 6.73828C11.7389 6.73828 14.0653 7.70217 15.8153 9.45214L12.2423 13.0251C11.4469 12.2296 10.3894 11.7917 9.26456 11.7917C8.13971 11.7917 7.08224 12.2296 6.2868 13.0251C5.49136 13.8205 5.0534 14.878 5.0534 16.0028C5.0534 17.1277 5.49136 18.1852 6.2868 18.9806C7.08224 19.776 8.13971 20.214 9.26456 20.214C10.3894 20.214 11.4469 19.776 12.2423 18.9806L15.8153 22.5535C14.0653 24.3035 11.7389 25.2674 9.26456 25.2674Z"
              fill="#5A4CDB"
            />
            <path
              d="M67.6591 25.2674C65.1848 25.2674 62.8584 24.3035 61.1084 22.5535C59.3584 20.8036 58.3945 18.4771 58.3945 16.0028C58.3945 13.5286 59.3584 11.2021 61.1084 9.45214C62.8584 7.70217 65.1848 6.73828 67.6591 6.73828C70.1334 6.73828 72.4598 7.70217 74.2098 9.45214L70.6369 13.0251C69.8414 12.2296 68.7839 11.7917 67.6591 11.7917C66.5342 11.7917 65.4768 12.2296 64.6813 13.0251C63.8859 13.8205 63.4479 14.878 63.4479 16.0028C63.4479 17.1277 63.8859 18.1852 64.6813 18.9806C65.4768 19.776 66.5342 20.214 67.6591 20.214C68.7839 20.214 69.8414 19.776 70.6369 18.9806L74.2098 22.5535C72.4598 24.3035 70.1334 25.2674 67.6591 25.2674Z"
              fill="#468BE8"
            />
          </svg>
        </LogoContainer>
        <NavLinks onMouseLeave={() => setHovered(-1)}>
          <PrimaryNavList ref={ref}>
            <li>
              <PrimaryNavLink onMouseEnter={() => setHovered(1)} href="#">
                Create
              </PrimaryNavLink>
            </li>
            <li>
              <PrimaryNavLink onMouseEnter={() => setHovered(2)} href="#">
                Tools
              </PrimaryNavLink>
            </li>
            <li>
              <PrimaryNavLink onMouseEnter={() => setHovered(3)} href="#">
                Explore
              </PrimaryNavLink>
            </li>
            <li>
              <PrimaryNavLink onMouseEnter={() => setHovered(4)} href="#">
                Learn
              </PrimaryNavLink>
            </li>
            <li>
              <PrimaryNavLink onMouseEnter={() => setHovered(0)} href="#">
                Pricing
              </PrimaryNavLink>
            </li>
            <li>
              <PrimaryNavLink onMouseEnter={() => setHovered(6)} href="#">
                About
              </PrimaryNavLink>
            </li>
          </PrimaryNavList>
          <SubMenu
            className={hovered.h > 0 ? 'active' : 'inactive'}
            style={{
              transition: hovered.t ? 'opacity 300ms, transform 300ms' : 'opacity 300ms, transform 0ms',
              transform: `translateX(${
                hoverWidth
                  ? ((5 - hovered.bds) / 2) * 14 * REM
                  : ((5 - hovered.bds) / 2) * 14 * REM + dimens.lefts[hovered.h - 1] - fullNavWidth / 2
              }px)`,
            }}>
            <SubMenuArrow
              className={hovered.h > 0 ? 'active' : 'inactive'}
              style={{
                transition: hovered.t ? 'opacity 300ms, transform 300ms' : 'opacity 300ms, transform 0ms',
                transform: `translateX(${
                  hoverWidth
                    ? ((hovered.bds * 14) / 2 - 0.5) * REM + dimens.lefts[hovered.h - 1] - fullNavWidth / 2
                    : ((hovered.bds * 14) / 2 - 0.5) * REM
                }px) rotate(45deg)`,
              }}
            />
            <SubMenuLinks className={hovered.h === 1 ? 'active' : 'inactive'}>
              <NavSubMenuLink name="Video maker" videoName="pumpkin.mp4" />
              <NavSubMenuLink name="YouTube videos" videoName="selfie.mp4" />
              <NavSubMenuLink name="Facebook video ads" videoName="filming.mp4" />
              <NavSubMenuLink name="Instagram video ads" videoName="dog.mp4" />
              <NavSubMenuLink name="Slideshow videos" videoName="pumpkin.mp4" />
            </SubMenuLinks>
            <SubMenuLinks className={hovered.h === 2 ? 'active' : 'inactive'}>
              <li>
                <a href="#">
                  <span>Video Editor</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Compress</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Convert</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Webcam recorder</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Screen recorder</span>
                </a>
              </li>
            </SubMenuLinks>
            <SubMenuLinks className={hovered.h === 3 ? 'active' : 'inactive'}>
              <li>
                <a href="#">
                  <span>Features</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Video templates</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Stock library</span>
                </a>
              </li>
            </SubMenuLinks>
            {/* <SubMenuLinks className={hovered.h === 4 ? 'active' : 'inactive'}>
              <li>
                <a href="#"><span>Blog</span></a>
              </li>
              <li>
                <a href="#"><span>Video marketing</span></a>
              </li>
              <li>
                <a href="#"><span>Video editing</span></a>
              </li>
            </SubMenuLinks> */}
            <SubMenuLinks className={hovered.h === 4 ? 'active' : 'inactive'}>
              <li>
                <a href="#">
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Video marketing</span>
                </a>
              </li>
            </SubMenuLinks>
            {/* <SubMenuLinks className={hovered.h === 6 ? 'active' : 'inactive'}>
              <li>
                <a href="#"><span>Jobs</span></a>
              </li>
              <li>
                <a href="#"><span>Company</span></a>
              </li>
              <li>
                <a href="#"><span>Brand</span></a>
              </li>
            </SubMenuLinks> */}
            <SubMenuLinks className={hovered.h === 6 ? 'active' : 'inactive'}>
              <li>
                <a href="#">
                  <span>Jobs</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Brand</span>
                </a>
              </li>
            </SubMenuLinks>
            <SubMenuBackdrop
              style={{
                transition: hovered.t ? 'transform 300ms' : 'transform 0ms',
                transform: `scaleX(${hovered.bds})`,
              }}
            />
          </SubMenu>
        </NavLinks>
        <AccountContainer>
          <LogInButton>Log in</LogInButton>
          <SignUpButton>Try for free</SignUpButton>
        </AccountContainer>
      </NavigationInner>
    </NavigationWrapper>
  )
}

export default Nav
