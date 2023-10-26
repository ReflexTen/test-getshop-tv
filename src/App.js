import { useState, useRef } from 'react'
import NumberEntryScreen from './components/NumberEntryScreen'
import PromoVide from './components/PromoVide'
import './styles/style.scss'

function App() {
  const [showNumberEntryScreen, setShowNumberEntryScreen] = useState(false)

  const controlVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  }

  const changeScreens = val => {
    controlVideo()
    setShowNumberEntryScreen(val)
  }

  const videoRef = useRef()

  return (
    <div className='App'>
      <PromoVide videoRef={videoRef} showNumberEntryScreen={showNumberEntryScreen} changeScreens={changeScreens} />
      <NumberEntryScreen showNumberEntryScreen={showNumberEntryScreen} changeScreens={changeScreens} />
    </div>
  )
}

export default App
