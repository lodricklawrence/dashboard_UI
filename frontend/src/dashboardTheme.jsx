import { createTheme} from '@mui/material/styles';

export const dashboardTheme = createTheme({
    components: {
        // Name of the component
        MuiButton: {
          styleOverrides: {
            // Name of the slot
            root: {
              // Some CSS
              fontWeight:600,
              fontSize:'0.87rem',
              textTransformation:'none',
              borderRadius:8.5,
              '&.MuiButton-contained': {
                  backgroundColor:'#009be5',
                  '&:hover':{
                      backgroundColor:'#006db3'
                  }
              },
              '&.MuiButton-outlined': {
                  color:'#fff',
                  borderColor:'rgba(255,255,255,0.7)',
                  '&:hover':{
                      backgroundColor:'rgba(0,0,0,0.04)'
                  }
            },
          },
        },
      },

      MuiSvgIcon:{
        styleOverrides:{
          root:{
            fontSize:'1.7rem'
          }
        }
      },

      MuiTypography: {
        styleOverrides: {
          h6: {
            textTransform: 'capitalize',
            fontSize:'1.6rem',
            fontWeight:60,
            color:'#fff',
            letterSpacing:'0.5px',
          },
        },
      },

      palette : {
        white:{
            main:'#64748B'
        }
      }, 
      
  }
});