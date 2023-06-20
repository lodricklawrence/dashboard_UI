import { NotificationBell } from "../common/NotificationBell/NotificationBell";
import CommonButton from "../common/CommonButton/CommonButton";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import Box from '@mui/material/Box';
function Header({title}){
    const headerStyles={
        wrapper:{
            width:'100%',
            display:'flex',
            flexDirection:'column',
            backgroundColor:'#008be5',
            // padding:'20px',
        },
        topRow:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'end',
            alignItems:'center',
            marginBottom:'20px',
            '&':{
                marginRight:'5px'
            }
        },
        middleRow:{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            marginBottom:'20px',
            marginLeft:'20px',
        },
        link:{
            fontWeight:500,
            color:'rgba(255,255,255,0.7)',
            '&:hover':{
                color:'#fff',
                cursor:'pointer'
            }
        },
        webButton:{
            marginRight:'5px'
        },
        helpIcon:{
            color:"white"
        },
        title: {
            margin: '0px', // Remove the default margin
          },
    }
    return( 
        <Box sx={headerStyles.wrapper}>
            <Box sx={headerStyles.topRow}>
                <Typography
                sx={headerStyles.link}
                >
                    Go to docs
                </Typography>
                <NotificationBell iconColor="white" />
                <Avatar src='https://mui.com/static/images/avatar/1.jpg'/>
            </Box>
            <Box sx={headerStyles.middleRow}>
                <Typography
                    variant='h6'
                    // color='white'
                    sx={headerStyles.title}
                >
                    {title}
                    
                </Typography>
            <Box>
                <CommonButton
                    sx={headerStyles.webButton}
                    variant='outlined'
                >
                    Web Setup
                </CommonButton>
                <Tooltip
                    title='help'
                >
                    <IconButton
                        color="white"
                        sx={headerStyles.helpIcon}
                    >
                        <HelpIcon/>
                    </IconButton>
                </Tooltip>
            </Box>
            </Box>
        </Box>
    )
}

export default Header