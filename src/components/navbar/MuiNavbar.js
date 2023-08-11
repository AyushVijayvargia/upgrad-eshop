import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { AppBar, Box, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import SignUp from '../signup/SignUp';

import { BrowserRouter as Router, Switch, Route,Routes, Link, BrowserRouter } from "react-router-dom";



const MuiNavbar = () =>
{
    return (
        <Box>
                <AppBar position="static">
                        <Toolbar>
                            <IconButton size="large" edge="start" color="inherit" aria-label='logo'>
                                <ShoppingCartIcon/>
                            </IconButton>
                            <Typography variant='h6' component='div' sx={{flexGrow : 1}}>
                                upGrad E-shop
                            </Typography>
                            <Stack direction='row' spacing={2}>
                                <Button color='inherit' component={Link} to="/signup">Sign Up</Button>
                                <Button color='inherit'component={Link} to="/login">Login</Button>
                            </Stack>
                        </Toolbar>
                    </AppBar>
              
        </Box>
    )
}

export default MuiNavbar;