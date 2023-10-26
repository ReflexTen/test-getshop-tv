import Panel from './Panel'
import QrCode from './QrCode'

const NumberEntryScreen = ({ changeScreens, showNumberEntryScreen }) => {
  return (
    <div className={`number-entry-screen ${!showNumberEntryScreen ? 'hide-screen' : ''}`}>
      <Panel changeScreens={changeScreens} showNumberEntryScreen={showNumberEntryScreen} />

      <QrCode />
    </div>
  )
}

export default NumberEntryScreen
