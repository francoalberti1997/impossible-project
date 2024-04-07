import React from 'react'

const Wsp = ({clickLanguage}) => {

  const mensaje = clickLanguage ? `¡Hola! Me gustaría obtener más información.` : `Hi, I would like to get more information.`;

  return (
    <div className="logo-wsp">
        <a class="whats-app" href={`https://wa.me/+5491169732194?text=${encodeURIComponent(mensaje)}`} target="" id="wsp"><i className="fa fab fa-whatsapp icon"></i></a>
    </div>
  )
}

export default Wsp
