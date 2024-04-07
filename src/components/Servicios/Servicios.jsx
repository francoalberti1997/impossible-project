import React from 'react';
import Components from './Components';

const Servicios = (props) => {
  
  return (
    <>
    {
      !props.render &&  
      <div className={`title-components title-h1` } id={props.section}>
        <div className="title-wallpaper"></div>
        <h1>{props.clickLanguage ? props.section : props.section_eng}</h1>
      </div>
    }
     

      {props.title_special && 
      <div className='title-h1'>
        <div className="title-wallpaper"></div>
        {/* <h1>{props.clickLanguage ? props.title_special : props.title_special_eng}</h1> */}
      </div>}

      {props.componentes.map((i, index) => {
        return <Components key={index} props={i} idioma={props.clickLanguage}
        />;
      })}
    </>
  );
};

export default Servicios;
