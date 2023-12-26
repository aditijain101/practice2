import React from 'react';
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [value,setValue]=useState();
  return (
    <div>
<AppBar
sx={{backgroundColor:'#232F3D'}}

position="sticky">
    <Toolbar>
    <Typography sx={{justifyContent:"center",display:"flex",gap:2}}>
        <LibraryBooksIcon/>
        Ai ChatBot
        </Typography>
        <Tabs
        sx={{ml:'auto'}}
         textColor='inherit'
          indicatorColor="secondary"
           value={value} 
           onChange={(e,val)=>setValue(val)}
           >
            <Tab  LinkComponent={NavLink} to="/" label='Home'/>
          

        </Tabs>
    </Toolbar>
    

</AppBar>
    </div>
  )
}

export default Header