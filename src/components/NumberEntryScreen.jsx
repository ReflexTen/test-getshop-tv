import Panel from './Panel'
import QrCode from './QrCode'

const NumberEntryScreen = ({ showScreen }) => {
  return (
    <div className='number-entry-screen'>
      <Panel showScreen={showScreen} />

      <QrCode />
    </div>
  )
}

export default NumberEntryScreen
