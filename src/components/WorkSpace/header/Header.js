import React from 'react'
import "./header.css"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Search from '@mui/icons-material/Search';
import HelpIcon from '@mui/icons-material/Help';
import { Button, Avatar, IconButton, Stack, Link } from '@mui/material';


function Header({workspace}) {
  return (
    <header>
      <div className="headerLeft">
      <Avatar className='headerAvatar'
                /*alt="Abdsamad brs"
                  src="/logo192.png"*/
                />
         <AccessTimeIcon/>
       
      </div>
      <div className="headerSearch">
        <Search />
        <input type="text" placeholder={'Rechercher dans '+ workspace.nom} />
      </div>
      <div className="headerRight">
        <IconButton type='Submit' color='info' aria-label="upload picture" component="span">
              <HelpIcon/>
        </IconButton>
            
      </div>
      </header>
  )
}

export default Header