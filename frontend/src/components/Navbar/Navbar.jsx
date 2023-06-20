import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems } from './consts/navbarItems';
import {useNavigate, Outlet, useLocation} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Header from '../Header/Header';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
const drawerWidth = 220;
function MyNavbar(){
    const navigate=useNavigate()
    const [title,setTitle]=useState(null)
    const location=useLocation()

    useEffect(()=>{
      const parsedTitle=location.pathname.replace('/',' ')
      setTitle(parsedTitle)
    },[location])

    return(
      <Box>
          <Drawer
            sx={{
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                backgroundColor:'cyan',
                color:'darkblue',
            },
            }}
            variant="permanent"
            anchor="left"
        >
        <Toolbar />
        <Divider/>
        <List>
          {mainNavbarItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton onClick={()=>navigate(item.route)}>
                <ListItemIcon  sx={{color:'darkblue'}}>
                  {item.Icon}
                </ListItemIcon>
                <ListItemText primary={item.Label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        </Drawer>
        <Grid container spacing={2} sx={{ position: 'fixed', top: 0, left: 0, right: 0 }}>
          <Grid item xs={12} sx={{marginLeft:'220px'}}>
            <Header title={title} />
          </Grid>
          <Grid item xs={12} sx={{marginLeft:'221px'}}>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
)
}

export default MyNavbar