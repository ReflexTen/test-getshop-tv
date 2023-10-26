import BgVideo from '../images/video-bg.mp4'
import qrCodeImg from '../images/qr-code.png'
import { useState, useEffect } from 'react'

const PromoVide = ({ videoRef, showNumberEntryScreen, changeScreens }) => {
  const [showBanner, setShowBanner] = useState(false)

  setTimeout(() => {
    setShowBanner(true)
    setCurrentBtn('transition')
  }, 5000)

  const [volume, setVolume] = useState(false)
  const [currentBtn, setCurrentBtn] = useState('')

  const volumeVideo = () => {
    if (videoRef.current.muted) {
      videoRef.current.muted = false
      setVolume(true)
    } else {
      videoRef.current.muted = true
      setVolume(false)
    }
  }

  const openPanel = e => {
    if (!showNumberEntryScreen) {
      switch (e.key) {
        case 'Enter':
          if (currentBtn === 'transition') {
            changeScreens(true)
          }
          break
        default:
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', openPanel)
    return () => {
      window.removeEventListener('keydown', openPanel)
    }
  }, [currentBtn, showNumberEntryScreen])

  return (
    <div className={`promo-video ${showNumberEntryScreen ? 'hide-screen' : ''}`}>
      <video ref={videoRef} autoPlay loop muted className='promo-video__video'>
        <source src={BgVideo} type='video/mp4' />
      </video>

      <button onClick={volumeVideo} className='promo-video__volume-btn'>
        Звук {volume ? 'ВКЛ.' : 'ВЫКЛ.'}
      </button>

      <div className={`promo-video__baner ${showBanner ? 'show' : ''}`}>
        <div className='promo-video__baner-title'>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!</div>
        <img className='promo-video__img' src={qrCodeImg} alt='' />
        <p className='promo-video__baner-text'>Сканируйте QR-код или нажмите ОК</p>
        <button
          onClick={() => {
            changeScreens(true)
          }}
          className={`promo-video__button ${currentBtn === 'transition' ? 'promo-video__button--focus' : ''}`}
        >
          ОК
        </button>
      </div>
    </div>
  )
}

export default PromoVide
