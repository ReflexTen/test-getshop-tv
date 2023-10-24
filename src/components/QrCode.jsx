import qrCodeImg from '../images/qr-code.png'

const QrCode = () => {
  return (
    <div className="qr-code">
      <div className="qr-code__text">Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</div>
      <img className="qr-code__img" src={qrCodeImg} alt="" />
    </div>
  )
}

export default QrCode
