import BgVideo from '../images/video-bg.mp4'
import qrCodeImg from '../images/qr-code.png'
import { useState } from 'react'

const PromoVide = ({ showScreen }) => {
  const [showBanner, setShowBanner] = useState(false)

  setTimeout(() => {
    setShowBanner(true)
  }, 5000)

  return (
    <div className='promo-video'>
      <video autoPlay={true} loop className='promo-video__video'>
        <source src={BgVideo} type='video/mp4' />
      </video>

      <div className={`promo-video__baner ${showBanner ? 'show' : ''}`}>
        <div className='promo-video__baner-title'>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!</div>
        <img className='promo-video__img' src={qrCodeImg} alt='' />
        <p className='promo-video__baner-text'>Сканируйте QR-код или нажмите ОК</p>
        <button onClick={() => showScreen(true)} className='promo-video__button'>
          ОК
        </button>
      </div>
    </div>
  )
}

export default PromoVide
