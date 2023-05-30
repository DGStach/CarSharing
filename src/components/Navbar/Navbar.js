import React from "react";
import "./NavbarStyles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone} from "@fortawesome/free-solid-svg-icons";

const Navbar=()=>{
    return(
        <div className="navContainer">


            <div className="logo">Logo</div>
            <div>
                <ul className="nav-menu">
                    <li>Nasza Flota</li>
                    <li>Oferta</li>
                    <li>Kontakt <FontAwesomeIcon icon={faPhone} /></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;



