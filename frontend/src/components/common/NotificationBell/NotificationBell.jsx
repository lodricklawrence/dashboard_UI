import { useState } from 'react';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BasicMenu from '../BasicMenu/BasicMenu'
export function NotificationBell({iconColor,onClick}){

    const notifications=[
        {
            id:0,
            label:"First notification"
        },
        {
            id:1,
            label:"Second notification"
        } 
    ]

    const newNotification=`You have ${notifications.length} notifications`
    const noNotification='You have no notifiation'
    
    const [open,setOpen]=useState(false)
    const [anchorEl,setAnchorEl]=useState(null)

    const handleOpen=(event)=>{
        setAnchorEl(event.currentTarget)
        setOpen(true)
    }

    const handleClose=()=>{
        setOpen(false)
    }

    return(
        <div>
        <Tooltip title={notifications.length? newNotification:noNotification}>
        <IconButton
        sx={{ color:iconColor}}
        
         onClick={notifications.length?handleOpen:null}
         >
            <Badge badgeContent={notifications.length} color="error">
                <NotificationsIcon/>
            </Badge>
        </IconButton>
        </Tooltip>
        <BasicMenu 
            open={open}
            anchorEl={anchorEl}
            handleClose={handleClose}
            menuItems={notifications}
         />
        </div>

    )
}