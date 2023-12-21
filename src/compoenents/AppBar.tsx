import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { SearchBar } from './searchbar';
import { useNavigate } from 'react-router-dom';


export const Appbar = React.memo( function Appbar() {


  const navigate = useNavigate()

  
  return <>
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            onClick={()=>{
              navigate('/')
            }}
          >
            VelvetWrist
          </Typography>

          <SearchBar />
          
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton  sx={{ p: 1 }} onClick={()=>{
                  navigate('/cart')
              }}>
                <Avatar alt="Remy Sharp" src="https://img.icons8.com/?size=256&id=9671&format=png" />
              </IconButton>
            </Tooltip>
    
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
}
)
