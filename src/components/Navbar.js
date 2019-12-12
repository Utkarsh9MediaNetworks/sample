import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/header.scss';
 
const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="flex-container">
                    <div style={{flexGrow: 1}}><Link to="/" className="brand-logo">logo</Link></div>
                    <div style={{flexGrow: 8}}>
                        <span className="icons">
                            <i className="fa fa-search"></i>
                        </span>
                        <span className="icons">
                            <Link to="/cart"><i className="fa fa-shopping-cart white"></i></Link>
                        </span>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar;