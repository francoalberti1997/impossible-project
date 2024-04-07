import React, { useState } from 'react'
import logo from "../navbar/1mPossible.png"
import logo_new from "../inicio/logo_nuevo.jpg"
import { Link } from 'react-router-dom';

const Navbar = ({toggleLanguage, clickLanguage}) => {

    const [clicked, setClicked] = useState(false);

    const lenguaje = localStorage.getItem("lenguaje");

    if (!lenguaje){
        lenguaje == "english";
    }


    const toggleMenu = () => {
        setClicked(!clicked);
        document.documentElement.classList.toggle('menu-active', clicked);
    };
    
  return (
    <nav>
        <div className="first-line">
            <div className="container-nav logo">
                <div className="logo-imagen"><Link to="/"><img src={logo} alt="" /></Link></div>
                {clickLanguage ? <p>Investigación líder</p> : <p>Leading research</p>}
            </div>
            <div className="container-nav info">
                <div className="info-contacto">

                    <div id="mobile" onClick={toggleMenu}>
                        {clicked ? <i className='fa fas fa-times'></i> : <i className='fa fas fa-bars'></i>}
                    </div>

                    <div className="phone phone-active">
                        <div className="icon-phone">
                            <i class="fa fa-solid fa-phone"></i>
                        </div>
                        <div className="info-phone">
                            <p className='mail-info'>inquiries.1mpossible@gmail.com</p>
                            <a class="number-info whats-app" href={clickLanguage ? `https://wa.me/+5491169732194?text=¡Hola! Me gustaría obtener más información.` : `"https://wa.me/+5491169732194?text=Hi! I would like to know more.`} target="" id="wsp"><p className='number-info'>+5491169732194</p></a>
                        </div>
                    </div>

                    <div className="select_lg" >
                        { (lenguaje!="spanish") ?  <div className="text-languaje" onClick={toggleLanguage}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" alt="" /></div> : <div className="text-languaje" onClick={toggleLanguage}><img src="https://cdn.britannica.com/36/4336-050-056AC114/Flag-Spain.jpg" alt="" /></div> }
                        <div className="icon-language"><i class="fa fa-solid fa-chevron-down"></i></div>
                    </div>
                </div>
            </div>
        </div>

        <div id="second-line">
            <div className="nav-section"><p><Link to="/">{clickLanguage ? `Home` : `Home`}</Link></p></div>
            <div className="nav-section"><p><a href='/#Servicios'>{clickLanguage ? `Servicios` : `Services`}</a></p></div>
            <div className="nav-section"><p><a href='/#Investigación'>{clickLanguage ? `Investigación` : `Research`}</a></p></div>
            <div className="nav-section"><p><a href="/#Team">{clickLanguage ? `Nosotros` : `About Us`}</a></p></div>
            <div className="nav-section"><p><a href="/#Mision">{clickLanguage ? `Misión` : `Mission`}    </a></p></div>
        </div>
        
        <div id="second-line-burguer" className={clicked ? 'active' : ''}>  
            <div id="img-banner" className={clicked ? 'active' : ''}>
                <div className="logo-imagen-section"><img src={logo_new} alt="" /></div>
            </div>
                
            <div className='nav-section-burguer'>
            <div className="nav-section" onClick={toggleMenu}><p><Link to="/">{clickLanguage ? `Home` : `Home`}</Link></p></div>
            <div className="nav-section" onClick={toggleMenu}><p><a href='/#Servicios'>{clickLanguage ? `Servicios` : `Services`}</a></p></div>
            <div className="nav-section" onClick={toggleMenu}><p><a href='/#Investigación'>{clickLanguage ? `Investigación` : `Research`}</a></p></div>
            <div className="nav-section" onClick={toggleMenu}><p><a href="/#Team">{clickLanguage ? `Nosotros` : `About Us`}</a></p></div>
            <div className="nav-section" onClick={toggleMenu}><p><a href="/#Mision">{clickLanguage ? `Mision` : `Mission`}</a></p></div>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar
