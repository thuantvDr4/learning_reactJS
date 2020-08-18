import { createMuiTheme, } from '@material-ui/core/styles';


export const theme = createMuiTheme({
   palette:{
       primary:{
           main: '#cddc39',
           contrastText:'#000'
       },
       secondary:{
           main: '#ab47bc',
           contrastText:'#fff'
       }
   },
    typography:{
       fontFamily: 'Comic Sans MS',
    }
});
