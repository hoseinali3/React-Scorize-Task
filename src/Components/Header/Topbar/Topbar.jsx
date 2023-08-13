import React from 'react'

import './Topbar.css'
import './Topbar.scss'

import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MobileMenu from '../MobileMenu/Mobile-Menu'
import Navbar from '../Navbar/Navbar'
import { Button, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'


export default function Topbar() {





    return (
        <div className='topbar-container'>

            <MobileMenu/>
            <div className="topbar-rightside">
                <Link to="/React-Scorize-Task" className='logo'>



                    اسکو<span className='logo-color'>رایز</span> | SCO<span className='logo-color'>RIZE</span>

                </Link>
                <Navbar />
            </div>
            <div className="topbar-leftside">
                <Button className='shop-icon'>
                    <ShoppingBagOutlinedIcon />
                </Button>
                <Button className='reg-login-btn'>

                   
                        <PersonOutlineOutlinedIcon sx={{marginLeft:"0.2em"}}/>
                        ثبت نام | ورود
                   



                </Button>
            </div>


        </div>
    )
}
