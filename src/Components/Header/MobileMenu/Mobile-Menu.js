import { useState, Fragment } from 'react';
import './Mobile-Menu.css';
import './Mobile-Menu.scss';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import NavbarDatas from '../NavbarDatas';
import { NavLink } from 'react-router-dom';
import { SwipeableDrawer } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

export default function MobileMenu() {
  const [open, setOpen] = useState(false)




  const list = (anchor) => (

    <List sx={{ width: 250, direction: "rtl" }} className="mobile-color">
      <CloseIcon sx={{ marginRight: 2, fontSize: 50, color: "var(--white)" }} onClick={() => setOpen(prev => !prev)} />
      {NavbarDatas.length !== 0 ? (
        NavbarDatas.map((item, index) => (
          <div key={item.id}>
            <ListItem sx={{ padding: 0 }}  >
  
              {!item.submenu ? (<ListItemButton>
  
  
                <NavLink style={{ padding: "12px 0", color: "var(--white)" }} to="/React-Scorize-Task">{item.title}</NavLink>
  
  
              </ListItemButton>) : (<Accordion sx={{ width: "100%", direction: "rtl" }} className="accordion">
                <ListItemButton className="mobile-li" >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color: "var(--white)" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ width: "100%"}}
                  >
  
                    <NavLink to="/React-Scorize-Task" style={{ color: "var(--white)" }}>{item.title}</NavLink>
                  </AccordionSummary>
                </ListItemButton>
                {item.menus.length ? (
                  item.menus.map(menu => (
  
                 <>
                      <ListItemButton >
                     
    
    
                          <NavLink to="/React-Scorize-Task" style={{padding: "12px 0", color: "var(--bs-gray-700)" }}>{menu.title}</NavLink>
    
                     
                      </ListItemButton>
    
                      <Divider className='devider' />
                    
                 </>
    
                   
    
                  ))
                ) : null}
              </Accordion>)}
  
  
            </ListItem>
            <Divider className='devider' />
          </div>
        ))
      ) : null}

    </List>

  );

  return (
    <div className='mobile-menu' >


      <div className="hamburger-menu" onClick={() => setOpen(prev => !prev)} >
        <div className="hamburger-menu-lines"></div>
      </div>


      <SwipeableDrawer
        anchor={"right"}
        open={open}
        onClose={() => setOpen(prev => !prev)}
        sx={{ direction: "ltr" }}
      >
        {list("right")}
      </SwipeableDrawer>






    </div>
  )
}


