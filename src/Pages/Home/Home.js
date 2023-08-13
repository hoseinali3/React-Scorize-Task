import React, { useState } from 'react'
import pic1 from '../../images/airpalne.webp'
import { Button } from '@mui/material'
import './Home.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import purplearrow from '../../images/purplearrow.webp'
import Tabs from '../../Components/Tabs/Tabs'


export default function Home() {




  const [searchValue,setSearchValue] = useState('SCORIZE.COM')



  return (
  


   
      <div className="home-wrapper">

      <div className="home-rightside">
        <Button className='transport-btn'><div className='airplane-icon'><FlightOutlinedIcon/></div> مهاجرت تضمینی </Button>
        <h1 className='home-title'>مهاجرت تضمینی به خارج از کشور با <span>اسکورایز</span><img src={purplearrow} alt="" /></h1>
        <Tabs/>
      </div>
       
      <div className="home-leftside">
        <div className="search-bar">
          <input type="text" className='search-input' value={searchValue} onChange={e => setSearchValue(e.target.value)} />
          <Button className='search-btn'><SearchOutlinedIcon className='search-logo'/></Button>
        </div>
<img src={pic1} alt="" />
      </div>
      </div>
       
   
    
  )
}
