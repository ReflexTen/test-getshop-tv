import { useState } from 'react'
import NumberEntryScreen from './components/NumberEntryScreen'
import PromoVide from './components/PromoVide'
import './styles/style.scss'

function App() {
  const [showNumberEntryScreen, setShowNumberEntryScreen] = useState(false)

  return <div className='App'>{!showNumberEntryScreen ? <PromoVide showScreen={setShowNumberEntryScreen} /> : <NumberEntryScreen showScreen={setShowNumberEntryScreen} />}</div>
}

export default App
