import { useState, useRef } from 'react'

import NumberEntryScreen from './components/NumberEntryScreen'
import './styles/style.scss'
import Keyboard from './test/Keyboard'

function App() {
  return (
    <div className="App">
      <NumberEntryScreen />

      {/* <Keyboard /> */}
      {/* <NumberEntryScreen /> */}
    </div>
  )
}

export default App
