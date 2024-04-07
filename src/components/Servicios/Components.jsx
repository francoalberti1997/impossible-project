import React from 'react'

const Components = ({props, idioma}) => {

  
  return (
    <div className={`servicios ${props.link_class} ${props.main}`} id={props.link_a}>
    
    <div className='criogenia' id={props.id_css}>
        <div className="main-text" >
          <div className="main-text-p">
            <h2>{idioma ? props.title: props.title_eng}</h2>
            <p>
              {idioma ? props.texto_p : props.texto_p_eng }
            </p>

            <div className='main-text-button' onClick={() => handleButtonClick(props.link, props.title)}>
            {props.link ? (
              <a href={`/${props.link}/`}>{idioma ? `Ver Más Información` : `View More`}</a>
            ) : (
              <a href={`/${props.title}`}>{idioma ? `Ver Más Información` : `View More`}</a>
            )}

            </div>
          </div>
        </div>

        <div className="main-image">
          <img src={props.imagen} alt="" />
        </div>
        
    </div>
  </div>
  )
}

export default Components
