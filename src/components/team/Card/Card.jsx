import React from 'react'

const Card = (props) => {

  // const nombre = props.nombre.replace(/\s+/g, "-");



  return (
    <div className="card">
        <div className="squareBox"></div>
        <div className="round_box"></div>
        <div className="img_box">
            <img src={props.usuario} alt="" />
        </div>

        <div className="user_content">
            <h5 className="name">{props.nombre}</h5>
            <p className="post">{props.profesion}</p>

            <div className="star">
            <p className='rol'>{props.rol}</p>
            </div>
            <p className="about">{props.texto}</p>

            
        </div>

        <div className='main-text-button Card'>
            <a href={`/Colaborador/${props.nombre}/`}>Ver Más</a>
        </div>
    </div>
  )
}

export default Card
