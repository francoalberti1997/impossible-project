import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Inicio from "./components/inicio/Inicio";
import Servicios from "./components/Servicios/Servicios";
import Wsp from "./components/wsp/Wsp";
import franco from "../src/components/Colaboradores/franco.jpeg"


import daniela from "../src/components/team/Daniela.jpeg"
import felipe from "../src/components/team/Felipe.png"
import samanta from "../src/components/Colaboradores/Samanta.jpeg"
import seba from "../src/components/team/Seba.jpg"
import dani from "../src/components/Colaboradores/Daniel.png"

import nahuel from "../src/components/team/Nahuel.png"

import logo_blanco from "../src/components/inicio/logo_nuevo.jpg"
import logo_verde from "../src/components/inicio/logo_nuevo_fondo_verde.jpg"

import ubicacion from "../src/components/mision/ubicacion.jpg"


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Team from "./components/team/Team";
import Colaboradores from "./components/Colaboradores/Colaboradores";
import Mision from "./components/mision/Mision";
import Footer from "./components/footer/Footer";



const ServiciosPage = ({clickLanguage, toggleLanguage, }) => {
  // const [clickLanguage, setLanguage] = useState(false);

  // const toggleLanguage = () => {
  //   setLanguage(!clickLanguage);
  // };

  return (
  <>
    <Navbar toggleLanguage={toggleLanguage} clickLanguage={clickLanguage} />
    <Wsp clickLanguage={clickLanguage}/>
    <Inicio toggleLanguage={toggleLanguage} clickLanguage={clickLanguage}/>
    <Servicios
      clickLanguage={clickLanguage}
      section={"Servicios"}
      section_eng={'Services'}  
      componentes={[
        {
          title: "Criogenia",
          title_eng: "Cryonics",
          main:"main-home",
          section: "Servicios",
          texto_p:
            "1mPossible innova en criogenia, abordando desafíos para la preservación corporal. No solo proveemos servicios, sino que somos aliados comprometidos en hallar soluciones, mejorando la tecnología criogénica y explorando avances en anti-aging. Nos comprometemos a persistir en la búsqueda de respuestas.",
          texto_p_eng:"1mPossible innovates in cryonics, addressing challenges in body preservation. We not only provide services but also stand as committed allies in finding solutions, enhancing cryogenic technology, and exploring advancements in anti-aging. We are dedicated to persisting in the quest for answers."
          ,
          imagen:
            "https://www.thoughtco.com/thmb/gpXe4f-4MQeNFrH4CMuWPya2aTw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/egg-storage-for-ivf-478187231-59491b7c3df78c537bc0b778.jpg",
        },
      ]}
    />
    <Servicios
      clickLanguage={clickLanguage}
      section={"Investigación"}
      section_eng={'Research'}
      componentes={[
        {
          title: "Rejuvenation",
          main:"main-home",
          title_eng: "Rejuvenation",
          texto_p_eng: "Challenge the limits of aging. Our dedication is focused on reversing biomarkers of aging, such as sarcopenia, chronic inflammation, oxidative stress, telomere length, and much more."
          ,texto_p:
            "Desafía los límites del envejecimiento. Nuestra dedicación se centra en revertir los marcadores del paso del tiempo, tales como sarcopenia, inflamación crónica, estrés oxidativo, longitud de los telómeros, y mucho más.",
          imagen:
            "https://wacenter.org/wp-content/uploads/2023/03/anti-aging.jpg",
        },
        {
          title: "Anti-aging",
          title_eng:"Anti-aging",
          main:"main-home",
          texto_p_eng:"1mPossible and its innovative Anti-aging Department are dedicated to slowing down the signs of aging through the implementation of healthy habits, state-of-the-art supplements, creams, and specialized treatments.",
          texto_p:
        '1mPossible y su innovador Departamento de Anti-aging se dedica a ralentizar los signos del envejecimiento a través de la implementación de hábitos saludables, suplementos de última generación, cremas y tratamientos especializados.'
 ,         imagen:
            "https://hips.hearstapps.com/hmg-prod/images/portrait-of-man-holding-younger-photo-of-himself-royalty-free-image-1685552323.jpg",
        },
        {
          title: "Life-extension",
          title_eng:"Life-extension",
          main:"main-home",
          texto_p_eng:"1mPossible guarantees the preservation of your body in cryonics, ensuring its optimal state without deterioration. Meanwhile, we work tirelessly on the development of advanced technologies to provide a definitive solution to your situation.",
          texto_p:
          '1mPossible garantiza la preservación de su cuerpo en criogenia, asegurando su óptimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías avanzadas para ofrecer una solución definitiva a su situación.',
          imagen:
            "https://wallpaperaccess.com/full/2351892.jpg",
        },
      ]}
    />
    <Team
          clickLanguage={clickLanguage}
          staff={"CEO"}
          staff_eng={"CEO"}
          rol={"Team"}
          icons={"fa-solid fa-user-tie"}
        componentes={[
          {
            usuario: seba,
            rol: "CEO",
            "role": "CEO",
            nombre: "Sebastián Cippitelli",
            profesion: "Director General de 1mPossible",
            job:"Managing Director of 1mPossible",
            texto_eng:"Sebastián Cippitelli, Managing Director of 1mPossible, is a visionary dedicated to pushing the boundaries in science and biomedicine, with the bold mission of overcoming mortality.",
            texto: "Sebastián Cippitelli, Director de 1mPossible, es un visionario dedicado a superar límites en ciencia y biomedicina, con la audaz misión de vencer la mortalidad."
          },
          // Puedes agregar más objetos con datos aquí según sea necesario
        ]}
      />
      <Team
        clickLanguage={clickLanguage}
        staff={"Nuestros Científicos"}
        staff_eng={"Our Scientists"}
        icons={"fa-solid fa-graduation-cap"}

        componentes={[
          {
            "usuario": daniela,
            "rol": "Científico",
            "role": "Scientist",
            "nombre": "Daniela López De Luise",
            "profesion": "Doctora en Ciencias Informáticas",
            "job":"Ph.D. in Computer Science",
            "texto_eng":"With a Ph.D. in Computer Science, she leads the CI2S LAB in artificial intelligence. Her current project at the Historical Museum Sarmiento aims to promote STEAM education.",
            "texto": "Doctora en Ciencias Informáticas, lidera el CI2S LAB en inteligencia artificial. Su proyecto actual en el Museo Histórico Sarmiento busca fomentar la enseñanza STEAM."
          },
          {
            "usuario": nahuel,
            "rol": "Científico",
            "role": "Scientist",

            "nombre": "Nahuel Turco",
            "profesion": "Estudiante de Biología Molecular",
            "job":"Molecular Biology Student",
            "texto": "Un estudiante destacado en biología molecular, Nahuel Turco, tiene el promedio más alto en su campo de estudio y se encuentra en una etapa avanzada de su trayectoria académica.",
            "texto_eng": `
            An outstanding student in molecular biology, Nahuel Turco holds the highest GPA in his field of study and is in an advanced stage of his academic journey.
            `
          },
          {
            "usuario": samanta,
            "rol": "Científico",
            "role": "Scientist",

            "nombre": "Samanta Adriana Reyes Molina",
            "profesion": "Doctora en Ciencias Edafología",
            "job":"Ph.D. in Soil Science",
            "texto": "Doctora en Ciencias Edafología y Licenciada en Biología, especializada en ecología y fisiología vegetal. Líder ambiental comprometida con proyectos sostenibles.",
            "texto_eng":"A Ph.D. in Soil Science and a Licensed Biologist, specializing in ecology and plant physiology. A dedicated environmental leader involved in sustainable projects.",
        },          // Puedes agregar más objetos con datos aquí según sea necesario
        ]}
      />

<Team
        clickLanguage={clickLanguage}
        staff={"Nuestros Técnicos"}
        staff_eng={"Our Technicians"}
        icons={"fa-solid fa-wrench"}
        componentes={[
          {
            "usuario": franco,
            "rol": "Colaborador",
            "role":"Collaborator",
            "nombre": "Franco Alberti",
            "profesion": "Digital Business Developer",
            "job":"Digital Business Developer",
            "texto_eng":"Full Stack Developer and Entrepreneur specializing in digital business with extensive experience in creating digital platforms and online marketing strategies.",
            "texto": "Desarrollador Full Stack y Emprendedor especializado en negocios digitales con amplia experiencia en la creación de plataformas digitales y estrategias de marketing online."
          },
          {
            "usuario": dani,
            "rol": "Colaborador",
            "role":"Collaborator",
            "nombre": "Daniel Lavagna",
            "profesion": "Diseñador Gráfico",
            "job":"Graphic Designer",
            "texto_eng":"Daniel Lavagna is a talented Graphic Designer, photographer, and video editor. Also, a teacher at a professional training center.",
            "texto": "Daniel Lavagna es un talentoso Diseñador Gráfico, fotógrafo y editor de videos. Además, docente en un centro de formación profesional."
          }
          
        ]}
      />
    {/* <Mision/> */}
    <Servicios
      clickLanguage={clickLanguage}

      componentes={[
        {
          link_a:"Mision",
          title: "Misión",
          title_eng:"Mission",
          id_css: "mision",
          main:"main-home",
          texto_p_eng:"Transform the Present. Ensure the Future. At 1mPossible, our mission is to provide every human being with TIME, a second chance to fully enjoy life and celebrate the achievements within it. Each person should have the ability to decide how long they want to live, and not be a slave to their biological decline.",
          texto_p:
            "Transforma el Presente. Garantiza el Futuro. En 1mPossible, nuestra misión es ofrecer a cada ser humano TIEMPO, una segunda oportunidad de disfrutar plenamente de la vida y celebrar los logros alcanzados en la misma. Cada persona debe ser capaz de decidir hasta cuando quiere vivir, y no ser esclava de su deterioro biológico. ",
          imagen:
            logo_blanco,  
          link:"mision"
        },
      ]}
    />
    <Servicios
          clickLanguage={clickLanguage}

      section={""}
      componentes={[
        {
          title: "Ubicación estratégica",
          title_eng:"Strategic Location",
          id_css: "mision",
          main:"main-home",
          texto_p_eng:"At 1mPossible, security is not just a slogan but the fundamental pillar that underpins every aspect of our project. We began our research in Buenos Aires, Argentina, and are proud to announce the planned opening in January 2026 of our cryonics operational center in Zug, with headquarters in Zurich, Switzerland.",
          texto_p:
          `
          En 1mPossible, la seguridad no es solo un lema, sino el pilar fundamental que respalda cada aspecto de nuestro proyecto. Iniciamos nuestras investigaciones en Buenos Aires, Argentina, y nos enorgullece anunciar la apertura planificada para enero de 2026 de nuestro centro operativo de criogenia en Zug, con oficinas centrales en Zúrich, Suiza.
          `,
          imagen:
          ubicacion,
          link:"ubicacion"
        },
      ]}
    />

    <Footer/>
  </>
);}

const Criogenia = ({clickLanguage, toggleLanguage}) => (
  <>
    <Navbar clickLanguage={clickLanguage} toggleLanguage={toggleLanguage}/>
    <Wsp clickLanguage={clickLanguage}/>
    <Servicios
      
      clickLanguage={clickLanguage}

      title_special="Criogenia"
      title_special_eng="CRYONICS"
      render="si"
      componentes={[
        {
          title: "Seguridad",
          title_eng:"Safety",
          section: "Servicios",
          texto_p:
          "Los tubos de criogenia, parte esencial de nuestro proceso, no dependen de suministro eléctrico para su mantenimiento, asegurando su protección y su integridad física en todo momento. En 1mPossible, su seguridad es nuestra máxima prioridad. No solo preservamos su integridad, sino que garantizamos la continuidad de los tratamientos ante cualquier eventualidad, ya sea una ruptura del sistema o una catástrofe natural. En cada paso que damos, en cada decisión que tomamos, su seguridad y bienestar son consideraciones centrales. Con 1mPossible, su futuro está resguardado en un entorno que prioriza la seguridad y la continuidad de la vida."
          ,
          texto_p_eng:"The cryogenic tubes, an essential part of our process, do not depend on electrical supply for maintenance, ensuring their protection and physical integrity at all times. At 1mPossible, the safety of our patients within our facilities is our top priority. We not only preserve your physical well-being but also guarantee the continuity of treatments in the face of any contingency, whether it be a system breakdown or a natural catastrophe. In every step we take, in every decision we make, the safety and well-being of our patients are central considerations. With 1mPossible, your future is safeguarded in an environment that prioritizes the safety and continuity of life.  ",
          imagen:
            "https://www.thoughtco.com/thmb/gpXe4f-4MQeNFrH4CMuWPya2aTw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/egg-storage-for-ivf-478187231-59491b7c3df78c537bc0b778.jpg",
          id_css: "texto_p",
          link_class: "criogenia_special_section",
        },
        {
          title: "Usted no está muerto cuando su corazón deja de latir y deja de respirar",
          title_eng:"You are not dead when your heart stops beating and you stop breathing",
          section: "Servicios",
          texto_p:
          `La muerte está actualmente asociada con la pérdida de las funciones cerebrales. En cambio debería definirse como la pérdida irreversible de la vida de manera absoluta y definitiva, cuando la estructura cerebral está destruida. 
          En el ámbito de la medicina, la muerte se asocia comúnmente con la pérdida irreversible de las funciones cerebrales. Sin embargo, la criónica propone una perspectiva innovadora al considerar la "muerte clínica" como una pausa metabólica, no un punto sin retorno. Este enfoque, respaldado por tecnologías emergentes como la nanotecnología, ofrece la posibilidad de reanimación.
          Los científicos en criónica se ven obligados por regulaciones legales a esperar la declaración de muerte clínica, lo que prolonga el inicio del procedimiento. Es crucial entender que la criónica busca preservar vidas, no revivir a quienes ya han fallecido. Esta espera legal tiene un impacto mínimo en la preservación efectiva de la vida del paciente.
          La criónica plantea la posibilidad teórica de preservar un cuerpo humano a temperaturas extremadamente bajas, con el potencial de ser revivido en el futuro. Aunque aún no se ha realizado con éxito en humanos, se explora el método de vitrificación para mantener la estructura neuronal, base de la mente humana, intacta.
          El daño al detener el flujo sanguíneo durante 6 minutos o más, principalmente afecta a los vasos sanguíneos y no a las neuronas. La criónica aborda este desafío, sugiriendo que iniciar los procedimientos lo más temprano posible, idealmente dentro del primer minuto de la muerte clínica, es óptimo. Sin embargo, el método sigue siendo viable incluso si se inicia más tarde debido a restricciones legales.
           `,
          texto_p_eng:"Death is currently associated with the loss of brain functions. Instead, it should be defined as the irreversible loss of life in an absolute and definitive manner, when the brain structure is destroyed. In the field of medicine, death is commonly linked to the irreversible loss of brain functions. However, cryonics proposes an innovative perspective by considering clinical death as a metabolic pause, not a point of no return. This approach, supported by emerging technologies such as nanotechnology, offers the possibility of revival. Cryonics scientists are constrained by legal regulations to await the declaration of clinical death, which prolongs the initiation of the procedure. It is crucial to understand that cryonics seeks to preserve lives, not revive those who have already passed away. This legal waiting period has minimal impact on the effective preservation of the patient's life. Cryonics poses the theoretical possibility of preserving a human body at extremely low temperatures, with the potential for revival in the future. Although not yet successfully performed in humans, the vitrification method is explored to maintain the neuronal structure, the basis of the human mind, intact. Damage from stopping blood flow for 6 minutes or more mainly affects blood vessels and not neurons. Cryonics addresses this challenge, suggesting that initiating procedures as early as possible, ideally within the first minute of clinical death, is optimal. However, the method remains viable even if initiated later due to legal restrictions.",
          imagen:
            "https://image.pbs.org/video-assets/KAID/science-trek/158279/images/mezzanine_801.jpg",
          id_css: "texto_p",
          link_class: "criogenia_special_section",
        },

        {
          title: "Método técnico estándar",
          title_eng: "Standard Technical Procedure",
          section: "Servicios",
          texto_p_eng:"After legal death, the patient is immersed in a bath of icy water to expedite cooling. Mechanical cardiopulmonary support is applied to facilitate this process. The rapid circulation of water cools the body from 37°C to 10°C. Subsequently, blood and a significant portion of water are replaced with a cryoprotectant to prevent ice formation. Finally, the body is cooled to -120°C and then to -196°C using liquid nitrogen for storage. Cryoprotection, employing compounds like glycerol, reduces or eliminates ice formation, preventing structural damage. Intracellular or extracellular crystallization is avoided, minimizing cellular damage. Vitrification, in comparison to freezing, halts biological time without causing structural harm."
          ,texto_p:
          `
          Después de la muerte legal, el paciente se sumerge en un baño de agua helada para acelerar el enfriamiento. 
          Se aplica soporte cardiopulmonar mecánico para facilitar este proceso. La circulación rápida de agua enfría el cuerpo de 37°C a 10°C. 
          Luego, se reemplaza la sangre y gran parte del agua por un crioprotector para prevenir la formación de hielo. Finalmente, el cuerpo se enfría a -120°C y luego a -196°C con nitrógeno líquido para su almacenamiento.
La crioprotección, mediante compuestos como el glicerol, reduce o elimina la formación de hielo, evitando daños estructurales. Se evita la cristalización intracelular o extracelular, reduciendo el daño celular. La vitrificación, en comparación con la congelación, detiene el tiempo biológico sin causar daño estructural.

          `,
          imagen:
          `https://media.licdn.com/dms/image/C4D1BAQHg6yM2QSvcyg/company-background_10000/0/1601919496557/reaction_biology_corporation_cover?e=2147483647&v=beta&t=7aPYMzEN7litvRUVsGUN2t-XSG57cdg6awboD5oFBcU`,
          id_css: "texto_p",
          link_class: "criogenia_special_section",
        },


        {
          title: "La muerte clínica no es muerte en absoluto",
          title_eng:"Clinical death does not represent death at all",
          texto_p_eng:"Contrary to common belief, our research reveals that the 6 minutes following cardiac arrest are not determinative for neurological damage. While it is true that apoptosis of the brain structure initiates at this moment, the process takes many hours to complete, largely preserving brain cells. The possibility of ischemic damage can be mitigated with stem cell transplantation, which enhances ischemic tolerance. Ideally, procedures should commence within two minutes of the declaration of clinical death and not exceed 15 minutes. Body cooling is crucial to prevent ischemic damage. Temperature reduction induces hypothermia, suppressing protease activity and safeguarding the blood-brain barrier. This is essential to prevent exposure of the brain parenchyma to blood flow and its subsequent deterioration.",
          section: "Servicios",
          texto_p:
          `
          Contrario a la creencia común, nuestra investigación revela que los 6 minutos después del paro cardíaco no son determinantes para el daño neurológico. Es cierto que la apoptosis de la estructura cerebral inicia en este momento, pero lleva muchas horas en completarse el proceso, preservando en gran medida las células cerebrales. La posibilidad de daño isquémico puede mitigarse con trasplante de células madre, que aumenta la tolerancia a la isquemia.
Lo ideal es comenzar los procedimientos dentro de dos minutos de la declaración de la muerte clínica y no exceder los 15 minutos. El enfriamiento del cuerpo, crucial para evitar daño isquémico. 
La reducción de temperatura causa hipotermia, deprimiendo la actividad proteasa y protegiendo la barrera hematoencefálica. Esto es esencial para evitar la exposición del parénquima cerebral al flujo sanguíneo y su consecuente deterioro.

          `,
          imagen:
          "https://wallpapers.com/images/hd/beautiful-sunshine-ll7at0ykw22hm07f.jpg",
          id_css: "texto_p",
          link_class: "criogenia_special_section",
        },

        {
          title: "La reanimación fue posible usando temperaturas mayores en animales",
          title_eng:"Reanimation using higher temperatures has been achieved in animals",
          section: "Servicios",
          texto_p_eng:"Experiments with rats, cats, and dogs have demonstrated successful reanimation rates using cooling techniques and blood substitutes. Rats have even been successfully reanimated multiple times, indicating the viability of the process. Experiments on dogs have shown resistance to ischemia, and the application of hypothermia has yielded positive results without significant neurological deterioration. In humans, hypothermic cardiac arrest has been successfully performed during surgical procedures, supporting the effectiveness of similar approaches.",
          texto_p:
          `
          Experimentos con ratas, gatos y perros han demostrado tasas de reanimación exitosas utilizando técnicas de enfriamiento y sustitutos sanguíneos. Incluso se ha logrado reanimar ratas varias veces, indicando la viabilidad del proceso. Experimentos en perros han demostrado resistencia a la isquemia, y la aplicación de hipotermia ha mostrado resultados positivos sin deterioro neurológico significativo. En humanos, la parada cardíaca hipotérmica se ha realizado con éxito durante procedimientos quirúrgicos, respaldando la efectividad de enfoques similares. 


          `,
          imagen:
          "https://static01.nyt.com/images/2019/09/10/multimedia/10xp-animaltesting1/10xp-animaltesting1-videoSixteenByNineJumbo1600-v2.jpg",
          id_css: "texto_p",
          link_class: "criogenia_special_section",
        },

        {
          title: "Las mejoras en el ámbito legal",
          title_eng:"Advancements in the legal realm",
          texto_p_eng:`Due to the unauthorized procedure without the formal presentation of clinical death, there will always be some minimal ischemic damage due to legal terms. This implies that there is always a certain pre-mortem ischemic damage, but the most significant damage occurs post-mortem. Therefore, being able to reduce the time from the declaration of clinical death to the minimum possible will decrease the damage to the patient.
          The immediate resumption of post-mortem circulation benefits tissues by reducing the amount of free radicals and damage due to reperfusion. The integrity of blood vessels is vital for transporting the cryoprotective vitrification solution to the brain, avoiding the formation of ice. Nanotechnology could, in the future, address any potential damage in the brain.`,
          section: "Servicios",
          texto_p:
          `
          Después de la muerte legal, el paciente se sumerge en un baño de agua helada para acelerar el enfriamiento. 
          Se aplica soporte cardiopulmonar mecánico para facilitar este proceso. La circulación rápida de agua enfría el cuerpo de 37°C a 10°C. 
          Luego, se reemplaza la sangre y gran parte del agua por un crioprotector para prevenir la formación de hielo. Finalmente, el cuerpo se enfría a -120°C y luego a -196°C con nitrógeno líquido para su almacenamiento.
La crioprotección, mediante compuestos como el glicerol, reduce o elimina la formación de hielo, evitando daños estructurales. Se evita la cristalización intracelular o extracelular, reduciendo el daño celular. La vitrificación, en comparación con la congelación, detiene el tiempo biológico sin causar daño estructural.

          `,
          imagen:
          "https://www.centromedicounidoc.com/wp-content/uploads/2023/02/Medicina-Legal-y-Forense-en-Marbella-Centro-Medico-Unidoc.jpg",
          id_css: "texto_p",
          link_class: "criogenia_special_section",
        },

        {
          title: "Nuestra propuesta técnica es superior a la existente",
          title_eng:"Our technical proposal is superior to the existing one",
          texto_p_eng:"Our research paves the way for the optimal preservation of the patient, anticipating enhanced outcomes in cryopreservation and striving to optimize the efficiency of the process for a more effective and prolonged preservation.",
          section: "Servicios",
          texto_p:
          `
          Nuestras investigaciones marcan un camino a seguir en cuanto a la preservación del paciente en las mejores condiciones posibles, anticipando resultados mejorados en la criopreservación y buscando optimizar la eficacia del proceso para prolongar la preservación de manera más efectiva.


          `,
          imagen:
          "https://i0.wp.com/esrobross.com.ec/wp-content/uploads/2015/07/Business-HD-Wallpaper-1.jpg?ssl=1",
          id_css: "texto_p",
          link_class: "criogenia_special_section",
        },
        
      ]}/>
      

  </>
);

const Rejuvenating = ({clickLanguage, toggleLanguage}) => (
  <>
    <Navbar clickLanguage={clickLanguage} toggleLanguage={toggleLanguage}/>
    <Wsp clickLanguage={clickLanguage}/>

    <Servicios
      clickLanguage={clickLanguage}
       componentes={[
        {
          title: "Rejuvenation",
          title_eng: "Rejuvenation",
          texto_p_eng:"1mPossible invites you to explore our revolutionary research area, where we challenge the limits of aging. We are dedicated to reversing the biomarkers of the passage of time, such as sarcopenia, chronic inflammation, oxidative stress, telomere length, and much more. We are committed to providing you with an unparalleled rejuvenation experience. Currently, we are in the research stage, exploring new frontiers to enhance your well-being.",
          texto_p: (
            <div
              dangerouslySetInnerHTML={{
                __html:
"1mPossible te invita a explorar nuestra revolucionaria área de investigación, donde desafiamos los límites del envejecimiento. Nos dedicamos a revertir los marcadores del paso del tiempo, como la sarcopenia, la inflamación crónica, el estrés oxidativo, la longitud de los telómeros, y mucho más. Estamos comprometidos en ofrecerte una experiencia de rejuvenecimiento incomparable. Estamos en la etapa de investigación, explorando nuevas fronteras para mejorar tu bienestar.",
              }}
            />
          ),
          imagen:
            "https://wacenter.org/wp-content/uploads/2023/03/anti-aging.jpg",
          id_css: "texto_p",

        }]}/>

  </>
);

const Lifeextension = ({clickLanguage, toggleLanguage}) => (
  <>
    <Navbar clickLanguage={clickLanguage} toggleLanguage={toggleLanguage}/>
    <Wsp clickLanguage={clickLanguage}/>

    <Servicios
      clickLanguage={clickLanguage}
      componentes={[
        {
          title: "Life-extension",
          title_eng:"Life-extension",
          texto_p_eng:"1mPossible guarantees the preservation of your body in cryonics, ensuring its optimal state without deterioration. Meanwhile, we work tirelessly on the development of advanced technologies to provide a definitive solution to your situation. With us, you have the assurance of life, now and in the future. Are you ready to transform your existence? We are in the research stage, exploring new frontiers to further enhance our assurances and services."
          ,texto_p: (
            <div
              dangerouslySetInnerHTML={{
                __html:
                "1mPossible garantiza la preservación de su cuerpo en criogenia, asegurando su óptimo estado sin deterioro. Mientras tanto, trabajamos incansablemente en el desarrollo de tecnologías avanzadas para ofrecer una solución definitiva a su situación. Con nosotros, tienes la garantía de vida, ahora y en el futuro. ¿Estás listo para transformar tu existencia? Estamos en etapa de investigación, explorando nuevas fronteras para mejorar aún más nuestras garantías y servicios.",
              }}
            />
          ),
          imagen:
            "https://wallpaperaccess.com/full/2351892.jpg",
          id_css: "texto_p",

        }]}/>

  </>
);

const Aging = ({clickLanguage, toggleLanguage}) => (
  <>
    <Navbar clickLanguage={clickLanguage} toggleLanguage={toggleLanguage}/>
    <Wsp clickLanguage={clickLanguage}/>

    <Servicios
        clickLanguage={clickLanguage}

       componentes={[
        {
          title: "Anti-aging",
          title_eng:"Anti-aging",
          texto_p_eng: "1mPossible introduces an innovative Anti-aging Department dedicated to slowing down the signs of aging through the implementation of healthy habits, state-of-the-art supplements, and specialized treatments. Additionally, we have an exclusive branch focused on lifestyle and healthy nutrition, oriented towards prevention and overall well-being. We are in a constant research stage, continually seeking new ways to enhance your quality of life.",
          texto_p: (
            <div
              dangerouslySetInnerHTML={{
                __html:
                "1mPossible presenta un innovador Departamento de Anti-aging dedicado a ralentizar los signos del envejecimiento mediante la implementación de hábitos saludables, suplementos de última generación y tratamientos especializados. Además, contamos con una exclusiva rama enfocada en el estilo de vida y la alimentación saludable, orientada hacia la prevención y el bienestar integral. Nos encontramos en una etapa de investigación constante, buscando continuamente nuevas formas de mejorar tu calidad de vida."
              }}
            />
          ),
          imagen:
            "https://hips.hearstapps.com/hmg-prod/images/portrait-of-man-holding-younger-photo-of-himself-royalty-free-image-1685552323.jpg",
          id_css: "texto_p",
        }]}/>

  </>
);

const ColaboradorPage = (props) => (
  <>
    <Navbar clickLanguage={props.language} toggleLanguage={props.toggleLanguage}/>
    <Wsp clickLanguage={props.language}/>
    <Colaboradores
      nombre={props.nombre}
      titulo={props.titulo}
      titulo_eng={props.titulo_eng}
      imagen={props.imagen}
      texto={props.texto}
      texto_eng={props.texto_eng}
      link={props.link}
      clickLanguage={props.language}
    />
        <Footer/>

  </>
);



function App() {

  
  const [clickLanguage, setClickLanguage] = useState(null); // default to true
  
  const storedLanguage = localStorage.getItem("lenguaje") ? localStorage.getItem("lenguaje"):`english`;

  useEffect(() => {
    const initialState_vacio = storedLanguage ? false : true;
    
    if (initialState_vacio){
      localStorage.setItem("lenguaje", "english");
    }


    if(localStorage.getItem("lenguaje") == "spanish"){
      setClickLanguage(true);
      // console.log("Se ha cambiado a spanish")
    }

    // console.log(`el valor es: ${storedLanguage}`);
  }, []);

  // Define toggleLanguage function to toggle language state and reload page
  const toggleLanguage = () => {
    // setClickLanguage(!clickLanguage);
    // Update localStorage with new language preference
    localStorage.setItem("lenguaje", (storedLanguage=="english") ? "spanish" : "english");

    window.location.reload();
  };



  const place_mission= [
    {
      title: "Misión",
      title_eng:"Mission",
      subtitulo: "Transformando el Presente, Garantizando el Futuro ",
      link: "mision",
      texto_p:`
      En 1mPossible, nuestra misión es ofrecer a cada ser humano TIEMPO, una segunda oportunidad de disfrutar plenamente de la vida y celebrar los logros alcanzados en la misma. Cada persona debe ser capaz de decidir hasta cuando quiere vivir, y no ser esclava de su deterioro biológico. 
      Los marcadores biológicos del envejecimiento representan una patologia, estética o funcional la cual podremos curar. Nos impulsa una visión constructiva y altruista, orientada a elevar a la humanidad a un nivel evolutivo sin precedentes: la inmortalidad. 
      Este anhelo, perseguido durante milenios, se convierte en una realidad tangible con 1mPossible. Nuestro equipo de científicos altamente capacitados y profesionales está comprometido a lograr el éxito donde otros han fallado. Los mejores en cada area, con un espíritu desafiante, confiamos en nuestra capacidad para alcanzar esta meta revolucionaria, y estamos dispuestos a asumir riesgos significativos para hacerlo. 
      En 1mPossible, no solo creamos una visión, sino que la convertimos en una realidad tangible, marcando un hito en la historia al ofrecer a la humanidad la promesa de un futuro más allá de los límites de la mortalidad.
      
      `,
      texto_eng:`
      
      At 1mPossible, our mission is to offer every human being TIME, a second chance to fully enjoy life and celebrate the achievements within it. Each person should have the ability to decide how long they want to live, and not be a slave to their biological decline. Biological markers of aging represent a pathology, whether aesthetic or functional, that we can cure. We are driven by a constructive and altruistic vision, aimed at elevating humanity to an unprecedented evolutionary level: immortality. This millennia-old aspiration becomes a tangible reality with 1mPossible. Our team of highly trained and professional scientists is committed to achieving success where others have failed. The best in each field, with a challenging spirit, we trust in our ability to reach this revolutionary goal and are willing to take significant risks to do so. At 1mPossible, we not only create a vision but turn it into a tangible reality, marking a milestone in history by offering humanity the promise of a future beyond the limits of mortality.
      `,
      imagen:
      logo_verde,
    },
{
      title: "Ubicación estratégica",
      title_eng:"Strategic Location",
      link: "ubicacion",
      subtitulo:"Total seguridad, nuestro compromiso",
      texto_p:

      `
      
      En 1mPossible, la seguridad no es solo un lema, sino el pilar fundamental que respalda cada aspecto de nuestro proyecto. Iniciamos nuestras investigaciones en Buenos Aires, Argentina y nos enorgullece anunciar la apertura planificada, para enero de 2026, de nuestro centro operativo de criogenia en Zug, con oficinas centrales en Zúrich, Suiza.
      
      `,
      texto_eng:"At 1mPossible, security is not just a slogan but the fundamental pillar that underpins every aspect of our project. We initiated our research in Buenos Aires, Argentina, and are proud to announce the planned opening in January 2026 of our cryonics operational center in Zug, with headquarters in Zurich, Switzerland."
      ,
      imagen: ubicacion,
    }
  ]

  const colaboradorData = [
    {
      usuario: daniela,
      rol: 'Científico',
      nombre: 'Daniela López De Luise',
      profesion: 'Doctora en Ciencias Informáticas',
      job:`Ph.D. in Computer Science`,
      link:{link_1:'https://r9.ieee.org/argentina-cis/inicio/autoridades/daniela-lopez-de-luise/ '},
      texto: `
  
      La docente, investigadora y directora del Artificial Intelligence Group (AIGroup) de la Facultad de Ingeniería de la Universidad de Palermo (UP), Daniela López De Luise, fue designada en el 2013 presidente de Institute of Electrical and Electronics Engineers (IEEE Argentina), por votación casi unánime e histórica por la cantidad de votantes.

Esta asociación profesional es la más grande del mundo y está dedicada al avance tecnológico y la innovación. Cuenta con más de 400 mil miembros en más de 160 países. El nombramiento con el que ha sido distinguida la Dra. López De Luise, quien hace 28 años es miembro del IEEE, es un altísimo honor que muy pocos en la Argentina han recibido, debido a las altas exigencias del Instituto respecto a los candidatos.

Daniela es Doctora en Ciencias Informáticas por la Universidad Nacional de La Plata, e Ingeniera en Informática, entre sus otros títulos. Es actualmente la directora del laboratorio de investigaciones «Computational Intelligence And Information Systems Labs (CI2S  LAB), asociación sin fines de lucro, dedicada al apalancamiento de la inteligencia artificial como investigación aplicada.

Revista actualmente como Directora de la Especialización de Ensenanza de Ciencias de la Computación, UADER (Entre Ríos), y es profesora de Posgrado en tres instituciones: en la Universidad Austral, en la disciplina de aprendizaje automático, en la Universidad Abierta Interamericana UAI y en la Universidad Señor del Sipán (Perú).

Presenta una extensa trayectoria como oradora en diversos eventos nacionales e internacionales, y ha publicado un centenar de trabajos relacionados con la disciplina de IA, creando conceptos como los wavelets morfosintácticos, aportando al estudio de la conciencia de robots y proponiendo nuevos mecanismos de propagación en el campo de los autómatas, como el caso del modelo de conciencia bacteriana.

Es miembro del programa local de disertantes distinguidos de la IEEE Argentina. Fue Presidente del comité directivo de la IEEE Argentina en el período 2013-2014. Fundó y dirigió el laboratorio de investigaciones AI Group en la Universidad de Palermo. Es fundadora del Capítulo Argentino de la IEEE Computational Intelligence Society, y fue su primera Presidente (2005). También ha creado la red científica PI Network en 2008, dirigiendo la misma hasta 2013. En su paso por el ITBA creó y dirigió el primer laboratorio de Bases de datos del ITBA, Instituto Tecnológico de Buenos Aires, hacia 1998, entre otras actividades.

En la actualidad, divide su tiempo entre su rol de investigadora, su rol en la IEEE Capitulo Argentina, y sus múltiples proyectos de investigación, desarrollo e innovación en torno a la inteligencia computacional. El último de ellos (2019) es versante sobre una novel arquitectura de islas de investigación, desarrollo e innovación, a radicarse en el Museo Histórico Sarmiento, en sociedad con la SCA (Sociedad Científica Argentina), con miras a lograr un lugar colaborativo para investigadores, empresas, organizaciones intermedias y docentes que deseen colaborar en la problemática de la enseñanza STEAM (ciencia, tecnología, ingeniería, arte y matemáticas).


      
      `,

      texto_eng:`
      Daniela López De Luise, Ph.D. in Computer Science, is a teacher, researcher, and director of the Artificial Intelligence Group (AIGroup) at the Faculty of Engineering of the University of Palermo (UP). In 2013, she was appointed President of the Institute of Electrical and Electronics Engineers (IEEE Argentina), a position achieved through nearly unanimous and historic voting due to the high number of voters. This professional association, the world's largest, is dedicated to technological advancement and innovation, boasting over 400 thousand members in more than 160 countries.

      The appointment, an extremely high honor bestowed upon Dr. López De Luise, a member of IEEE for 28 years, is rare in Argentina due to the institute's stringent candidate requirements. She holds a Ph.D. in Computer Science from the National University of La Plata and is an Information Technology Engineer, among her other titles. Currently, she directs the Computational Intelligence And Information Systems Labs (CI2S LAB), a non-profit association dedicated to leveraging artificial intelligence as applied research. Dr. López De Luise serves as the Director of the Specialization in Computer Science Teaching at UADER (Entre Ríos) and is a postgraduate professor at three institutions: the Universidad Austral, teaching machine learning; the Universidad Abierta Interamericana (UAI); and the Universidad Señor del Sipán (Peru).
      
      She has an extensive history as a speaker at various national and international events, having published about a hundred works related to the field of AI. Dr. López De Luise has introduced concepts like morphosyntactic wavelets, contributed to the study of robot consciousness, and proposed new propagation mechanisms in the field of automata, such as the model of bacterial consciousness. She is a member of the local Distinguished Speakers Program of IEEE Argentina and served as the President of the IEEE Argentina Steering Committee in the 2013-2014 period. She founded and directed the AI Group research laboratory at the University of Palermo, was the founder of the Argentine Chapter of the IEEE Computational Intelligence Society, and served as its first President in 2005. She also created the scientific network PI Network in 2008, leading it until 2013.
      
      Throughout her time at ITBA (Instituto Tecnológico de Buenos Aires), she created and directed the first database laboratory in 1998, among other activities. Currently, she divides her time between her roles as a researcher, her position in IEEE Argentina Chapter, and her numerous research, development, and innovation projects related to computational intelligence. Her latest project (2019) involves the establishment of a novel architecture for islands of research, development, and innovation at the Museo Histórico Sarmiento, in collaboration with the SCA (Sociedad Científica Argentina). The goal is to create a collaborative space for researchers, companies, intermediary organizations, and educators interested in addressing STEAM (science, technology, engineering, art, and mathematics) education challenges.
            
      `
    },
    {
      usuario: nahuel,
      rol: 'Científico',
      nombre: 'Nahuel Turco',
      profesion: 'Estudiante de Biología Molecular',
      job:"Molecular Biology Student",
      texto_eng:`
    
      Nahuel Turco, an outstanding student in molecular biology, boasts the highest GPA in his field of study and is in an advanced stage of his academic journey. His sharp intelligence and problem-solving ability distinguish him as an exceptional individual in his field. In the academic world, Nahuel is recognized for his unique vision. He emphasizes that, in an increasingly complex and fascinating world, biology emerges as an essential discipline for understanding and modifying life. His commitment lies in using his skills in biology to bring scientific knowledge to society as a whole. His vision is rooted in the conviction that everyone, regardless of their socioeconomic background, should have the opportunity to benefit from the results of scientific research and the progress of science. Nahuel advocates for the importance of building bridges between the scientific community and the general public, promoting accessible outreach and providing resources that enable people to explore and understand advances in biology.

At 1mPossible, our approach is inherently interdisciplinary, guided by an unwavering commitment to achieving tangible results. We value the ability of young and talented geniuses who have the skill to solve the problems of tomorrow, transcending beyond mere academic recognition. Nahuel Turco, with his outstanding performance and sharp intelligence in biology, perfectly embodies our philosophy. His vision of bringing scientific knowledge to society and bridging the gap between the scientific community and the general public aligns perfectly with our commitment to addressing complex challenges in innovative and practical ways. At 1mPossible, we recognize and celebrate visionary talent that goes beyond conventional limits, and Nahuel is a clear example of this transformative approach.


      `,
      texto: `
      Nahuel Turco, un destacado estudiante de biología molecular, ostenta el más alto promedio de calificaciones en su campo de estudio y se encuentra en una etapa avanzada de su trayectoria académica. Su aguda inteligencia y capacidad para resolver problemas lo distinguen como un individuo excepcional en su campo. En el ámbito académico, Nahuel es reconocido por su visión única. Él enfatiza que, en un mundo cada vez más complejo y fascinante, la biología emerge como una disciplina esencial para comprender y modificar la vida. Su compromiso radica en utilizar sus habilidades en biología para llevar el conocimiento científico a la sociedad en su conjunto. Su visión está arraigada en la convicción de que todos, independientemente de su situación socioeconómica, deberían tener la oportunidad de beneficiarse de los resultados de la investigación científica y el progreso de la ciencia. Nahuel aboga por la importancia de construir puentes entre la comunidad científica y el público en general, promoviendo la divulgación accesible y proporcionando recursos que permitan a las personas explorar y comprender los avances en biología.

      En 1mPossible, nuestro enfoque es inherentemente interdisciplinario, guiado por un compromiso inquebrantable de lograr resultados tangibles. Valoramos la capacidad de jóvenes talentosos y genios que tienen la habilidad para resolver los problemas del mañana, trascendiendo más allá del mero reconocimiento académico. Nahuel Turco, con su destacado desempeño y aguda inteligencia en biología, encarna perfectamente nuestra filosofía. Su visión de llevar el conocimiento científico a la sociedad y cerrar la brecha entre la comunidad científica y el público en general se alinea perfectamente con nuestro compromiso de abordar desafíos complejos de manera innovadora y práctica. En 1mPossible, reconocemos y celebramos el talento visionario que va más allá de los límites convencionales, y Nahuel es un claro ejemplo de este enfoque transformador.
      `,
    },
    {
      usuario: samanta,
      rol: 'Científico',
      nombre: 'Samanta Adriana Reyes Molina',
      profesion: 'Doctora en Ciencias Edafología',
      job:"Ph.D. in Soil Science",
      texto: `
      La Doctora Samanta Reyes Molina es una apasionada investigadora que ha dedicado su vida a explorar los secretos de la biología. 
En el año 2000 se sumergió en el fascinante mundo de la Biología, graduándose con honores en el año 2006. Este fue solo el comienzo de su viaje. Después de nutrir su curiosidad en la licenciatura, Samanta decidió llevar su conocimiento al siguiente nivel. Se aventuró en el Colegio de Postgraduados Campus Montecillo, donde se convirtió en Maestra en Ciencias Botánica entre 2008 y 2011..
En 2016 obtiene su Doctorado en Ciencias Edafología en el mismo Colegio de Postgraduados. Con dedicación y pasión, exploró los misterios del suelo y desentrañó los secretos que este guardaba.
Samanta se convirtió en una valiosa colaboradora en proyectos de ecología, explorando los poblados de cactáceas en el Valle de Cuatro Ciénegas, Coahuila. También se destacó como asistente de investigación, enseñando fisiología vegetal y contribuyendo a proyectos de investigación que buscaban mejorar la calidad de vida de las plantas.
Actualmente Samanta está inmersa en una Maestría en Nutrición Deportiva en el Instituto de Estudios Superiores de Ingeniería Educativa.
Sus intereses científicos son tan vastos como su sed de conocimiento. Desde gestión de proyectos sustentables hasta auditorías ambientales, pasando por cultivos in vitro y clasificación taxonómica de plantas, Samanta es una exploradora incansable del mundo científico. Actualmente con intereses de investigación en el area de criogenia, envejecimiento y antia-ging.
Posee habilidades excepcionales. Es organizada, profesional, motivada y aprende con rapidez. Su compromiso con el avance científico se refleja en su participación activa en congresos y su constante búsqueda de cursos y certificaciones.
Samanta Reyes posee conocimiento, pasión y un compromiso inquebrantable con el progreso científico.

      `,
      texto_eng:`
      
Dr. Samanta Reyes Molina is a passionate researcher who has dedicated her life to exploring the secrets of biology. In the year 2000, she immersed herself in the fascinating world of Biology, graduating with honors in 2006. This was just the beginning of her journey. After nurturing her curiosity during her undergraduate studies, Samanta decided to take her knowledge to the next level. She ventured into the College of Postgraduates Campus Montecillo, where she became a Master of Science in Botany between 2008 and 2011. In 2016, she earned her Ph.D. in Soil Science at the same College of Postgraduates. With dedication and passion, she explored the mysteries of the soil and unraveled the secrets it held.

Samanta became a valuable collaborator in ecology projects, exploring cactus populations in the Valle de Cuatro Ciénegas, Coahuila. She also excelled as a research assistant, teaching plant physiology and contributing to research projects aimed at improving the quality of plant life. Currently, Samanta is immersed in a Master's in Sports Nutrition at the Institute of Higher Studies in Educational Engineering. Her scientific interests are as vast as her thirst for knowledge. From sustainable project management to environmental audits, in vitro cultivation, and taxonomic classification of plants, Samanta is an tireless explorer of the scientific world. Currently, she has research interests in the areas of cryogenics, aging, and anti-aging. She possesses exceptional skills. Samanta is organized, professional, motivated, and quick to learn. Her commitment to scientific advancement is reflected in her active participation in conferences and her constant pursuit of courses and certifications. Samanta Reyes has knowledge, passion, and an unwavering commitment to scientific progress.

      `
    },
    {
      usuario: seba,
      rol: 'CEO',
      nombre: 'Sebastián Cippitelli',
      profesion: 'Director General de 1mPossible',
      job:"Managing Director of 1mPossible",
      language:clickLanguage,
      texto: `
      Sebastián Cippitelli, el visionario Director General de 1mPossible, cuyo viaje ha estado marcado por la creación de ideas revolucionarias para impulsar el avance científico.

      Sebastián, un políglota consumado, ha dedicado la última década a forjar ideas disruptivas que desafían los límites de la ciencia. Su travesía formal en el ámbito de la investigación y el estudio en biología y medicina ha abarcado los últimos tres años, donde ha demostrado un compromiso inquebrantable con la exploración de nuevos horizontes en estas disciplinas.
      
      Con una convicción inquebrantable, Sebastián sostiene que el éxito en cada área de desarrollo de 1mPossible se logra con el equipo adecuado de colaboradores y el respaldo financiero necesario. Su visión audaz va más allá de los límites convencionales, desafiando la percepción actual de la mortalidad.
      
      El plantea que la mejora de los protocolos existentes podría llevar a la criopreservación exitosa de un cuerpo y a la optimización de los tratamientos de anti-envejecimiento. Además, busca implementar tratamientos de rejuvenecimiento aún inexistentes en la actualidad. Su visión culmina en una cruzada colosal: vencer a la muerte, no solo resistir ante ella.
      
      A través de sus ideas audaces y dedicación incansable, se erige como un pionero que desafía los límites del conocimiento en pos de un futuro donde la vida no sea simplemente esclava de la muerte. 
         
      `,
      texto_eng:`
      Sebastián Cippitelli, the visionary Managing Director of 1mPossible, whose journey has been marked by the creation of revolutionary ideas to drive scientific advancement. Sebastián, a accomplished polyglot, has dedicated the last decade to forging disruptive ideas that challenge the limits of science. His formal journey in the realm of research and study in biology and medicine spans the past three years, where he has demonstrated an unwavering commitment to exploring new horizons in these disciplines. With unwavering conviction, Sebastián contends that success in every area of 1mPossible's development is achieved with the right team of collaborators and the necessary financial backing. His bold vision extends beyond conventional limits, challenging the current perception of mortality. He posits that improving existing protocols could lead to successful body cryopreservation and the optimization of anti-aging treatments. Furthermore, he seeks to implement rejuvenation treatments that do not yet exist today. His vision culminates in a colossal crusade: to conquer death, not merely resist it. Through his bold ideas and tireless dedication, he stands as a pioneer challenging the limits of knowledge in pursuit of a future where life is not merely a slave to death.
      `
    },
    {
      usuario: franco,
      rol: 'Técnico',
      nombre: 'Franco Alberti',
      link: {link_1:'https://francoalberti1997.vercel.app/', link_2:'https://www.linkedin.com/in/franco-alberti-3248b7224/'},
      profesion: 'Digital Business Developer',
      job:`Digital Business Developer`,
      texto: `
      Desarrollador Full Stack y Emprendedor especializado en negocios digitales con amplia experiencia en la creación de plataformas digitales y estrategias de marketing online.
      Founder de "Tu Educación Alternativa", una academia de inglés online. Ahora también, emprendiendo en la transformación digital de negocios con "Alberti Code". 
      `,
      texto_eng: `
      Full Stack Developer and Entrepreneur specializing in digital business with extensive experience in creating digital platforms and online marketing strategies. Founder of "Tu Educación Alternativa," an online English academy. Also venturing into the digital transformation of businesses with "Alberti Code."
      `,
    },
    {
      usuario: dani,
      rol: 'Técnico',
      nombre: 'Daniel Lavagna',
      link: "",
      profesion: 'Diseñador Gráfico',
      job:"Graphic Designer",
      texto: `
      Daniel Lavagna es un talentoso Diseñador Gráfico, fotógrafo y editor de videos. Su enfoque versátil le permite abordar diversos aspectos del diseño visual, desde la creación de identidades visuales hasta la producción de contenido multimedia atractivo. No solo es diseñador sino que también docente en un centro de formación profesional.
      `,
      texto_eng:`
      Daniel Lavagna is a talented Graphic Designer, photographer, and video editor. His versatile approach allows him to tackle various aspects of visual design, from creating visual identities to producing engaging multimedia content. Not only is he a designer, but also a teacher at a professional training center.
      `,
    }


    
    
    // You can add more objects with data here as needed
  ];


  return (
    <Router>
      <Routes>
        <Route path="*" element={<ServiciosPage clickLanguage={clickLanguage} toggleLanguage={toggleLanguage} />} />
        <Route path="/Criogenia" element={<Criogenia clickLanguage={clickLanguage} toggleLanguage={toggleLanguage}/>} />
        <Route path="/Rejuvenation" element={<Rejuvenating clickLanguage={clickLanguage} toggleLanguage={toggleLanguage}/>} />
        <Route path="/Life-extension" element={<Lifeextension clickLanguage={clickLanguage} toggleLanguage={toggleLanguage}/>} />
        <Route path="/Anti-aging" element={<Aging clickLanguage={clickLanguage} toggleLanguage={toggleLanguage}/>} />
        
        {colaboradorData.map((i)=>(
          <Route path={`/Colaborador/${i.nombre}/`} element={<ColaboradorPage  toggleLanguage={toggleLanguage} language={clickLanguage} nombre={i.nombre} imagen={i.usuario} titulo={i.profesion} titulo_eng={i.job} texto={i.texto} texto_eng={i.texto_eng} link={i.link}/>}/>    
        ))}

        {place_mission.map((i)=>(
          <Route path={`/${i.link}/`} element={<ColaboradorPage toggleLanguage={toggleLanguage} language={clickLanguage} link={i.link} imagen={i.imagen} titulo={i.title} texto={i.texto_p} subtitulo={i.subtitulo}  titulo_eng={i.title_eng} texto_eng={i.texto_eng}/>}/>    
        ))}
      </Routes>
    </Router>
  );
}

export default App;
