import React from 'react'
// import logo_square from "../inicio/1mPossible.jpg"
import logo_square from "../inicio/logo_nuevo_fondo.jpg"
import portada from '../inicio/portada.jpg'

const Inicio = ({toggleLanguage, clickLanguage}) => {
  return (
        <div className='inicio' id=''>
            
            <div className="inicio-wrapper-image">
                <img src={portada} alt="" />
            </div>
            <div className="inicio-text">
            
                <div className="inicio-text-image">
                    <img src={logo_square} alt="" />
                </div>
                <div className="inicio-text-title">
                    <h2>
                    
                        {clickLanguage ? `Explorando la Inmortalidad: Ciencia Vanguardista en 1mPossible.` : `Exploring Immortality: Cutting-Edge Science at 1mPossible`}
                    
                    </h2>
                </div>
            </div>
            <div className="inicio-text-title mobile-text">
            <h2>
            {clickLanguage ? `Explorando la Inmortalidad: Ciencia Vanguardista en 1mPossible.` : `Exploring Immortality: Cutting-Edge Science at 1mPossible`}        
            </h2>
            </div>

            {/* <div className="mobile-img">
                <img src={logo_square} alt="" />
            </div> */}

    </div>
        
    // </div>
  )
}

export default Inicio
