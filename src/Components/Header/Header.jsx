import React from "react";
import './Header.css'
import logoCap from '../../../public/logo-cap.png'

function Header() {
    return (
        <header>
            <img id="LogoCapMario" src={logoCap} alt="Logo chapeu do Mario" />
            
            <div>

                <ul className="Nav">
                    <li className="navegar"><a className="navHeadear" href="#">HOME</a></li>
                    <li className="navegar"><a className="navHeadear" href="#">STORY</a></li>
                    <li className="navegar"><a className="navHeadear" href="#">WALLPAPERS</a></li>
                    <li className="navegar"><a className="navHeadear" href="#">TRAILER</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header