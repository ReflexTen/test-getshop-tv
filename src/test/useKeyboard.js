import { useState } from 'react'

const useKeyboard = () => {
  const [numberPhone, setNumberPhone] = useState('')

  const handleKeyPress = key => {
    setNumberPhone(prevText => prevText + key)
  }

  const delNum = val => {
    // let gg = val.slice(0, -1)

    setNumberPhone(val)
  }

  return { numberPhone, handleKeyPress, delNum }
}
export default useKeyboard
