import React, { useCallback, useEffect, useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated as a } from 'react-spring'
import './threedeestyles.css'
import styled from 'styled-components'
import Nav from './Nav'
import ThreeDShapes from './threedeeshapes.js'
// import useScroll from './useScroll'

/**
 * useScroll React custom hook
 * Usage:
 *    const { scrollX, scrollY, scrollDirection } = useScroll();
 */

const isBrowser = typeof window !== 'undefined'

function useWindowSize() {
  const isClient = typeof window === 'object'

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return false
    }

    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}

const LabelWrapper = styled.div`
  max-width: 80vw;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  will-change: opacity;
`

const LabelContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
  will-change: opacity;
`

const Track = styled(a.div)`
  position: absolute;
  width: 18.4%;
  height: 0;
  padding-bottom: 2.5%;
  display: flex;
  align-items: center;
  will-change: transform;
`

const TrackName = styled(a.div)`
  font-weight: 600;
  color: white;
  padding: 0 5% 0 3%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.8vw;
  display: flex;
  align-items: center;

  span {
    width: calc(100% - 1.5vw);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 5%;
  }

  svg {
    width: 1.25vw;
    min-width: 1.25vw;
    height: auto;
    margin-right: 0.3vw;
    opacity: 0.5;
  }
`

const Trackground = styled(a.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
  will-change: opacity;
`

const Hero = () => {
  const windowSize = useWindowSize()
  const [pcFromTop, setPcFromTop] = useState(0)
  const [playingVideo, setPlayingVideo] = useState(null)

  const vid1Ref = useRef(null)

  const setVideo = () => {
    setPlayingVideo(1)
    vid1Ref.current.currentTime = 0
    vid1Ref.current.play()
  }

  const [{ st }, set] = useSpring(() => ({ st: 0 }))
  const { timelineProgress } = useSpring({
    timelineProgress: pcFromTop >= 0.95 ? 100 : 17.5,
    config: { duration: pcFromTop >= 0.95 ? 12000 : undefined },
    onFrame: (f) => {
      if (f.timelineProgress >= 21.5 && f.timelineProgress < 25 && playingVideo !== 0) {
        setPlayingVideo(0)
      } else if (f.timelineProgress >= 25 && f.timelineProgress < 50 && playingVideo !== 1) {
        setVideo()
      } else if (f.timelineProgress >= 50) {
        setPlayingVideo(2)
      } else if (f.timelineProgress < 21.5) {
        setPlayingVideo(-1)
      }
    },
  })

  const interpLabel1 = st.interpolate(
    (o) => `
  translate(${(1 - o) * -160}%, ${(1 - o) * -600}%)
  rotate(${(1 - o) * -50}deg)
  `,
  )
  const interpLabel2 = st.interpolate(
    (o) => `
  translate(${(1 - o) * -100}%, ${(1 - o) * 600}%)
  rotate(${(1 - o) * -16}deg)
  `,
  )
  const interpLabel3 = st.interpolate(
    (o) => `
  translate(${(1 - o) * 150}%, ${(1 - o) * -400}%)
  rotate(${(1 - o) * 30}deg)
  `,
  )
  const interpLabel4 = st.interpolate(
    (o) => `
  translate(${(1 - o) * 0}%, ${(1 - o) * -1000}%)
  rotate(${(1 - o) * -60}deg)
  `,
  )

  const interpDetailsColor = st.interpolate((o) => (o < 0.4 ? undefined : '#fff'))
  const interpBackdropOpacity = st.interpolate((o) => (o < 0.4 ? 0 : 1))
  const onScroll = useCallback(
    (e) => {
      const localPcFromTop = e.target.scrollTop / windowSize.height
      if (localPcFromTop < 1) {
        set({ st: localPcFromTop })
        setPcFromTop(localPcFromTop)
      } else if (pcFromTop !== 1) {
        set({ st: 1 })
        setPcFromTop(1)
      }
    },
    [pcFromTop],
  )

  return (
    <main className="main" onScroll={onScroll}>
      <Nav hide={pcFromTop !== 0} />
      <div className="heroContainer">
        <div className="stickyContainer">
          <LabelWrapper style={{ opacity: pcFromTop < 0.92 ? 0 : (pcFromTop - 0.92) * 20 * 1 }}>
            <LabelContainer>
              <Track
                style={{
                  left: '24.8%',
                  top: '74.6%',
                  transform: interpLabel1,
                }}>
                <Trackground style={{ background: '#5a4cdb', opacity: pcFromTop < 0.94 ? 0 : (pcFromTop - 0.95) * 30 * 1 }} />
                <TrackName>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 6.5V5C4 4.44772 4.44772 4 5 4H12M20 6.5V5C20 4.44772 19.5523 4 19 4H12M12 4V20M12 20H9.5M12 20H14.5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Make your business one to watch</span>
                </TrackName>
              </Track>
              <Track
                style={{
                  left: '43.2%',
                  top: '80%',
                  transform: interpLabel2,
                }}>
                <Trackground style={{ background: '#468BE8', opacity: pcFromTop < 0.94 ? 0 : (pcFromTop - 0.95) * 30 * 1 }} />
                <TrackName>
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path
                        d="M9.25 16.75C13.3921 16.75 16.75 13.3921 16.75 9.25C16.75 5.10786 13.3921 1.75 9.25 1.75C5.10786 1.75 1.75 5.10786 1.75 9.25C1.75 13.3921 5.10786 16.75 9.25 16.75Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.75 6.25L12.25 9.25L7.75 12.25V6.25Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="bevel"
                      />
                    </g>
                  </svg>
                  video.mp4
                </TrackName>
              </Track>
              <Track
                style={{
                  left: '61.6%',
                  top: '85.3%',
                  transform: interpLabel3,
                }}>
                <Trackground style={{ background: '#A260D4', opacity: pcFromTop < 0.94 ? 0 : (pcFromTop - 0.95) * 30 * 1 }} />
                <TrackName>
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path
                        d="M9.25 16.75C13.3921 16.75 16.75 13.3921 16.75 9.25C16.75 5.10786 13.3921 1.75 9.25 1.75C5.10786 1.75 1.75 5.10786 1.75 9.25C1.75 13.3921 5.10786 16.75 9.25 16.75Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.75 6.25L12.25 9.25L7.75 12.25V6.25Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="bevel"
                      />
                    </g>
                  </svg>
                  stock_footage.mp4
                </TrackName>
              </Track>
              <Track
                style={{
                  left: '80%',
                  top: '74.6%',
                  transform: interpLabel4,
                }}>
                <Trackground style={{ background: '#5a4cdb', opacity: pcFromTop < 0.94 ? 0 : (pcFromTop - 0.95) * 30 * 1 }} />
                <TrackName>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 6.5V5C4 4.44772 4.44772 4 5 4H12M20 6.5V5C20 4.44772 19.5523 4 19 4H12M12 4V20M12 20H9.5M12 20H14.5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Try for free
                </TrackName>
              </Track>
              <a.div
                className="seekerWrapper"
                style={{
                  opacity: pcFromTop >= 1 ? 1 : 0,
                  transition: 'opacity 100ms',
                  willChange: 'opacity, transform',
                  transform: timelineProgress.interpolate((o) => `translateX(${o}%)`),
                }}>
                <a.div className="seeker" style={{ opacity: timelineProgress.interpolate((o) => (o > 25 ? 1 : (o - 20) * 0.2)) }} />
              </a.div>
            </LabelContainer>
          </LabelWrapper>
          <a.div className="shapesContainer">
            <ThreeDShapes spring={st} />
          </a.div>
          <div className="heroDetailsContainer">
            <div className="detailsContainer">
              <a.div
                className={`headlineContainer${playingVideo >= 0 ? ' hidden' : ''}`}
                style={{
                  transform: st.interpolate(
                    (o) =>
                      `translateY(-${0 + pcFromTop * 7}%) translateX(${0 + pcFromTop * 19}%) scale(${
                        pcFromTop < 0.95 ? 1 - pcFromTop * 0.135 : 0.865 - (pcFromTop - 0.95) * 20 * 0.05
                      })`,
                    // translateY(-7%) translateX(19%) scale(0.86)
                  ),
                }}>
                <a.div
                  className="videoBackdrop"
                  style={{
                    opacity: interpBackdropOpacity,
                    transform: st.interpolate((o) => `translate(-50%, -50%) scale(${1.2 - o * 0.2})`),
                    background:
                      pcFromTop >= 1
                        ? timelineProgress.interpolate((o) => (o < 50 ? '#5a4cdb' : o < 75 ? '#63ADF2' : '#A260D4'))
                        : '#5A4CDB',
                  }}>
                  <a.video
                    className={playingVideo === 1 ? 'playing' : playingVideo < 1 ? 'before' : 'after'}
                    ref={vid1Ref}
                    src="video_1.mp4"
                    type="video/mp4"
                    muted
                  />
                </a.div>
                <a.h2
                  className="headline"
                  style={{
                    color: interpDetailsColor,
                    transform: st.interpolate((o) => `scale(${1 - o * 0.25})`),
                  }}>
                  <span style={{ transition: 'color 500ms, opacity 300ms, transform 300ms' }}>Make your </span>
                  <a.b
                    style={{
                      transition: 'color 500ms, opacity 300ms 75ms, transform 300ms 75ms',
                      color: interpDetailsColor,
                    }}>
                    business
                  </a.b>
                  <span style={{ transition: 'color 500ms, opacity 300ms 150ms, transform 300ms 150ms' }}> one to watch</span>
                </a.h2>
              </a.div>
              <div className={`extraDetails ${pcFromTop < 0.05 ? '' : 'hidden'}`}>
                <h1 className="subheadline">Tell stories worth sharing with Clipchamp’s free browser-based video editor.</h1>
                <div className="buttonContainer">
                  <button className="button primary">Try for free</button>
                  <button className="button secondary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M10 8L16 12L10 16V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Play demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="appWrapper">
          <div className="appContainer">
            <div className="dummyApp">
              <a.div className="seekerWrapper" style={{ transform: timelineProgress.interpolate((o) => `translateX(${o}%)`) }}>
                <a.div className="seeker" style={{ opacity: timelineProgress.interpolate((o) => (o > 25 ? 1 : (o - 20) * 0.2)) }} />
              </a.div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: '200vw',
            background: '#EAEAFA',
            height: '50vh',
            marginLeft: '-50vw',
          }}
        />
      </div>
    </main>
  )
}

class App extends React.Component {
  render() {
    return <Hero />
  }
}
export default Hero;
