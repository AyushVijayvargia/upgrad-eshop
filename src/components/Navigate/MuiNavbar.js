import ShoppingCart from '@mui/icons-material/ShoppingCart'
import { AppBar, Box, Button, Stack, TextField, Toolbar, Typography,Container,Input } from "@mui/material";
import { BrowserRouter as Router, Switch, Route,Routes, Link, BrowserRouter } from "react-router-dom";

import React, { useState,useContext } from "react";

import {useDispatch, useSelector} from 'react-redux';
import {Outlet, useLocation} from 'react-router-dom';

import { Link as Anchor, useNavigate} from 'react-router-dom';

import SearchBar from './Search';


const Menu = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
   
    if(!props.isLoggedIn || location.pathname === '/login' || location.pathname === '/signup') {
      return(
        <Box sx={{ typography: 'body1', '& > :not(style) + :not(style)': {ml: 2, mr: 2,},}}>
          <Link to ="/login"> <Button variant="inherit" >Login</Button></Link>
          <Link to="/signup"> <Button variant="inherit" >Sign up</Button></Link>
        </Box>
      )
    }
    // when we are loggedin
    return(
      <React.Fragment>
        <Box sx={{ typography: 'body1', '& > :not(style)': {ml: 1, mr: 1,},}}>
          {props.isLoggedIn && <Link to="/" color="inherit" variant="body2">Home</Link>}
          {props.isAdmin && <Link to ='/addproduct'  color="inherit" variant="body2" >Add Product</Link>}
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {props.isLoggedIn ? <Button color="inherit" className='logout' onClick={() => {
            dispatch({type: 'logout'});
            navigate('/');
          }}>Logout</Button> : <Button color="inherit"><Anchor to='login'>Login</Anchor></Button>}
        </Box>
      </React.Fragment>
    )
  }
  
const MuiNavbar = () =>
{
    const user = useSelector(state => state.user);
    const isLoggedIn = Object.keys(user).length !== 0;
    const isAdmin = isLoggedIn && user.isAdmin;
    const dispatch = useDispatch();
    if(localStorage.getItem('admin@upgrad.com') === null) {
      const adminDetails = {
        contactNumber: "+911234567890",
        email: "admin@upgrad.com",
        firstName: "Ayush",
        isAdmin: true,
        lastName: "Vijay",
        password: "Admin@123"
      };
      localStorage.setItem('admin@upgrad.com', JSON.stringify(adminDetails));
    }
    //if someboy logins with user id but there is no backend code for getting admin so hardcode
    else
    {
      localStorage.removeItem('admin@upgrad.com');
      const adminDetails2 = {
        contactNumber: "+911234567890",
        email: "admin@upgrad.com",
        firstName: "Ayush",
        isAdmin: true,
        lastName: "Vijay",
        password: "Admin@123"
      };
      localStorage.setItem('admin@upgrad.com', JSON.stringify(adminDetails2));
    }
    
    return (

      <React.Fragment>
      <Box display='fixed' className='nav-bar' sx={{ flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar>  
           <>
              <ShoppingCart />
              <Typography variant="h6" padding={1} noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
                upGrad E-Shop
              </Typography>
           </>
            <SearchBar isLoggedIn={isLoggedIn} dispatch={dispatch}/>
            <Box sx={{ flexGrow: 1 }} />
            <Menu isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </React.Fragment>
    )
}

export default MuiNavbar;