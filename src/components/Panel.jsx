import { useEffect, useState } from 'react'

import React from 'react'
import InputMask from 'react-input-mask'
// import useKeyboard from '../test/useKeyboard'

const Panel = () => {
  const buttonArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'стереть', 0]

  const [currentNum, setCurrentNum] = useState(5)

  // const { numberPhone, handleKeyPress, delNum } = useKeyboard()

  const [numberPhone, setNumberPhone] = useState([])

  const [isActiveButton, setIsActiveButton] = useState(false)

  const handleKeyPress = key => {
    if (numberPhone.length === 10) {
      return
    }
    setNumberPhone([...numberPhone, key])
    console.log(numberPhone)
  }

  const delNum = () => {
    numberPhone.pop()

    console.log(numberPhone)

    setNumberPhone([...numberPhone])
  }

  const kp = e => {
    switch (e.key) {
      case '1':
        handleKeyPress(1)
        setCurrentNum(1)
        break
      case '2':
        handleKeyPress(2)
        setCurrentNum(2)
        break
      case '3':
        handleKeyPress(3)
        setCurrentNum(3)
        break
      case '4':
        handleKeyPress(4)
        setCurrentNum(4)
        break
      case '5':
        handleKeyPress(5)
        setCurrentNum(5)
        break
      case '6':
        handleKeyPress(6)
        setCurrentNum(6)
        break
      case '7':
        handleKeyPress(7)
        setCurrentNum(7)
        break
      case '8':
        handleKeyPress(8)
        setCurrentNum(8)
        break
      case '9':
        handleKeyPress(9)
        setCurrentNum(9)
        break
      case '0':
        handleKeyPress(0)
        setCurrentNum(11)
        break
      case 'Backspace':
        delNum()
        setCurrentNum(10)
        break

      default:
    }
    ////////////////////////
    if (e.key === 'Enter') {
      // e.preventDefault()
      if (currentNum === 11) {
        handleKeyPress(0)
      } else if (currentNum === 10) {
        delNum()
      } else {
        handleKeyPress(currentNum)
      }
      // setCurrentNum(currentNum + 1)
    }
    /////////////////////
    if (e.key === 'ArrowRight') {
      if (currentNum === 3 || currentNum === 6 || currentNum === 9 || currentNum === 11) {
        setCurrentNum('x')
      } else if (currentNum === 'x') {
        return
      } else {
        setCurrentNum(currentNum + 1)
      }
    }
    /////////////////////
    if (e.key === 'ArrowLeft') {
      if (currentNum === 'x') {
        setCurrentNum(6)
      } else {
        setCurrentNum(currentNum - 1)
      }
    }
    /////////////////////
    if (e.key === 'ArrowUp') {
      if (currentNum === 11) {
        setCurrentNum(currentNum - 2)
        return
      }
      if (currentNum === 1 || currentNum === 2 || currentNum === 3) {
        return
      }
      if (currentNum === 'x') {
        return
      } else {
        setCurrentNum(currentNum - 3)
      }
    }
    /////////////////////
    if (e.key === 'ArrowDown') {
      if (currentNum === 8 || currentNum === 9) {
        setCurrentNum(currentNum + 2)
      } else if (currentNum === 'x') {
        return
      } else {
        setCurrentNum(currentNum + 3)
      }
    }
    /////////////////////
    console.log(currentNum)
  }

  useEffect(() => {
    window.addEventListener('keydown', kp)
    return () => {
      window.removeEventListener('keydown', kp)
    }
  }, [numberPhone, currentNum])

  return (
    <div className="promo">
      <div className="panel">
        <div className="panel__title">Введите ваш номер мобильного телефона</div>

        <form className="panel__form">
          <InputMask className="panel__input" name="panel__input" placeholder="+7(___)___-__-__" value={numberPhone.join('')} mask="+7(999)999-99-99" readOnly />

          <label className="panel__label-input" htmlFor="panel__input">
            и с Вами свяжется наш менеждер для дальнейшей консультации
          </label>

          <div className="panel__button-box">
            {buttonArr.map((item, idx) => {
              if (item === 'стереть') {
                return (
                  <div key={idx} onMouseEnter={() => setCurrentNum(idx + 1)} className={`panel__button panel__button--clear ${currentNum === idx + 1 ? 'panel__button-focus' : ''} `} onClick={delNum}>
                    {item}
                  </div>
                )
              } else {
                return (
                  <div key={idx} onMouseEnter={() => setCurrentNum(idx + 1)} className={`panel__button ${currentNum === idx + 1 ? 'panel__button-focus' : ''}`} onClick={() => handleKeyPress(item)}>
                    {item}
                  </div>
                )
              }
            })}
          </div>

          <label className="panel__label-checkbox">
            <input onChange={() => setIsActiveButton(!isActiveButton)} className="panel__checkbox sr-only" type="checkbox" name="panel__checkbox" id="panel__checkbox" required />
            <span className="panel__castom-checbox"></span>
            <span className="panel__label-text">Согласие на обработку персональных данных</span>
          </label>

          <button className="panel__button panel__button--submit" type="submit" disabled={numberPhone.length === 10 && isActiveButton ? false : true}>
            Подтвердить номер
          </button>
        </form>
      </div>

      <button onMouseEnter={() => setCurrentNum('x')} className={`promo__close-button ${currentNum === 'x' ? 'promo__close-button-focus' : ''}`}></button>
    </div>
  )
}

export default Panel
