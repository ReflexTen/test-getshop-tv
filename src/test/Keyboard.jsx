import React from 'react'

import useKeyboard from './useKeyboard'

const Keyboard = () => {
  const { text, handleKeyPress } = useKeyboard()

  return (
    <div>
      {/* Поле для вывода вводимого текста */}
      <textarea value={text} readOnly />
      {/* Кнопки клавиатуры */}
      <div>
        <button onClick={() => handleKeyPress('1')}>1</button>
        <button onClick={() => handleKeyPress('2')}>2</button>
        <button onClick={() => handleKeyPress('3')}>3</button>
      </div>
    </div>
  )
}

export default Keyboard
