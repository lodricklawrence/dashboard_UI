import BasicCard from "../components/common/BasicCard/BasicCard"
import SearchBar from "../components/common/SearchBar/SearchBar"
import CommonButton from "../components/common/CommonButton/CommonButton"
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import BasicModal from "../components/common/BasicModal/BasicModal";
import { useState } from "react";
function Authentication(){
    const[open,setOpen]=useState(false);

    const handleChange=(event)=>{
        console.log(event.target.value)
    }

    const addUser =()=>{
        setOpen(true)
        console.log('clicked')
        
    }
    const getHeader=()=>{
    const headerStyles={
        wrapper:{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            paddingLeft:'20px',
            paddingRight:'20px',
            height:'50px',
            backgroundColor:'#f5f5f5',
        },

        addUserButton:{
            fontSize:'1.05rem'
        }
    }

        return(
            <Box sx={headerStyles.wrapper}>
            <SearchBar
                placeholder="Search by email adress, phone number, or user UID"
                onChange={handleChange}
                SearchBarWidth='720px'
            />
            <Box>
            <CommonButton
                variant='contained'
                onClick={addUser}
                size="small"
                sx={headerStyles.addUserButton}
            >
                Add User
            </CommonButton>
            <IconButton>
                <RefreshIcon/>
            </IconButton>
            </Box>
            </Box>
        )

    };

    const getContent=()=>{
        return(
            <Typography
            align='center'
            sx={{margin:'40px 16px',color:'rgba(0,0,0,0.6)',fontSize:'1.3rem'}}
        >
            No users for this project yet
        </Typography>
        )

    }

    return(
        <Grid
            item xs={12} 
            sx={{
                marginLeft:'0px',backgroundColor:'#eaeff1',padding:'48px 62px',
                minHeight:'calc(100vh-166px)', position:'relative'
            }}
        >
           <BasicCard
            header={getHeader()}
            content={getContent()}
            />
            <BasicModal open={open} />
        </Grid>
    )
}

export default Authentication