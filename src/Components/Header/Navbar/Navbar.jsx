import React, { useState, useEffect } from 'react'
import './Navbar.css'
import NavbarDatas from '../NavbarDatas'
import { Link, NavLink } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
export default function Navbar() {

    const [navbarData, setNavbarData] = useState(NavbarDatas)





    return (
        <div className='navbar-container'>
            <nav className='navbar1'>
                <ul className='main-menu-list'>
                    {navbarData.length && (
                        navbarData.map(nav => (
                            <li key={nav.id} className={`main-menu-listitem ${nav.id === 1 ? "nav-active" : null}`}><NavLink to="/React-Scorize-Task">{nav.title} {nav.submenu ? <KeyboardArrowDownIcon/> : null}</NavLink>

                                {nav.submenu && (
                                    <ul className='main-submenu-list'>
                                        {nav.menus.map(submenu => (
                                            <li key={submenu.id} className='main-submenu-listitem2'>
                                               
                                                <NavLink to="/React-Scorize-Task" className="submenu-title"> <KeyboardArrowLeftIcon/> {submenu.title}</NavLink>
                                              
                                            </li>
                                        ))}
                                      
                                    </ul>
                                )}
                            </li>
                        ))
                    )}
                </ul>
            </nav>
        
        </div>
    )
}
