import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider} from '@mui/material/styles';
import { dashboardTheme } from './dashboardTheme.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={dashboardTheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
)
