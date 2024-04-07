import React from 'react';

const Colaboradores = (props) => {
  return (
    <div className='colaborador'>
      <div className="presentacion">
        <div className="presentacion-corta">
          <h2>
            {props.nombre}
          </h2>
          <h3>
            {props.clickLanguage ? props.titulo : props.titulo_eng}
          </h3>
        </div>

        <div className="imagen-presentacion">
          <div className="wrapper-image">
            <img src={props.imagen} alt="" />
          </div>

          <div className="wrapper-icons">
            {props.link?.link_1 && <a href={props.link.link_1}><i class="fa-solid fa-laptop"></i></a>}
            {props.link?.link_2 && <a href={props.link.link_2}><i class="fa-brands fa-linkedin"></i></a>}
          </div>
        </div>

      </div>

      <div className="texto-colaborador">
        <p>
          {props.clickLanguage ? props.texto : props.texto_eng}
        </p>
      </div>
    </div>
  );
}

export default Colaboradores;
