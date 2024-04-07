

import Card from './Card/Card';

const Team = (props) => {
  return (
    <div className='team' id={props.rol}>

        <div className="title">{props.clickLanguage ? props.staff : props.staff_eng} <i class={props.icons}></i></div>

        <div className="card_container">

        {props.componentes.map((i) => (
            <Card usuario={i.usuario} rol={props.clickLanguage ? i.rol : i.role} nombre={i.nombre} profesion={props.clickLanguage ? i.profesion : i.job} texto={props.clickLanguage ? i.texto : i.texto_eng}/>
        ))}
        
        </div>

            {/* <div className="card_container"> */}
            {/* <Card usuario={i.usuario} rol={i.rol} nombre={"Daniela López De Luise"} profesion={"Doctora en Ciencias Informáticas"} texto={"Doctora en Ciencias Informáticas, lidera el CIIS LAB en inteligencia artificial. Su proyecto actual en el Museo Histórico Sarmiento busca fomentar la enseñanza STEAM."}/> */}
            {/* <Card usuario={felipe} rol={"Founder"} nombre={"Felipe Bruno Dias de Oliveira "} profesion={"Doctor en Ciencias de la Salud "} texto={"Doctor en Ciencias de la Salud, formado en Albert Einstein y reconocido por Oxford, investiga en la Universidad de Buenos Aires, destacándose en mecanobiología."}/> */}
            {/* <Card usuario={samanta} rol={"Científico"} nombre={"Samanta Adriana Reyes Molina"} profesion={"Doctora en Ciencias Edafología"} texto={"Doctora en Ciencias Edafología y Licenciada en Biología, especializada en ecología y fisiología vegetal. Líder ambiental comprometida con proyectos sostenibles."}/> */}
            {/* <Card usuario={franco} rol={"Colaborador"} nombre={"Franco Alberti"} profesion={"Digital Business Developer"} texto={"Emprendedor,  Programador Full Stack, Estudiante de Ingeniería."}/> */}
    </div>
);
}

export default Team;
