import React from "react";
import './App.css';
import Login from "./components/login/Login";
import { BrowserRouter as Router, Switch, Route,Routes, Link, BrowserRouter } from "react-router-dom";
import SignUp from "./components/signup/SignUp";
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import ProductDetails from './components/ProductDetails/ProductDetails';
import NotFound from './components/ErrorHandling/NotFound';
import Order from './components/Order/Order';
import { CssBaseline } from '@mui/material';
import ProductForm from './components/ProductForm/ProductForm';
import Content from "./components/Content/FilterAndButtons";
import MuiNavbar from "./components/Navigate/MuiNavbar";

// prop theme is required for ThemeProvider
const theme = createTheme({
      palette: {
        type: 'light',
        primary: {
          main: '#3f51b5',
        },
        secondary: {
          main: '#f50057',
        },
        background: {
          default: "#F9F4F3"
        }
      },
    });
    

const App = () => {
  //redux methods - use selector and dispatcher
  var dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const isLoggedIn = Object.keys(user).length !== 0;
  const sessionUser = sessionStorage.getItem('currentUser');
    if(!isLoggedIn && sessionUser !== null) {
      dispatch({type: 'login', payload: JSON.parse(sessionUser)});
    }
  
  return (
      <ThemeProvider theme={theme}>
         <CssBaseline>
            <div className="App">
                        <Routes>
                              <Route path="/" element={<MuiNavbar />}>
                              <Route path="signup"element={<><SignUp /></>}/>
                              <Route path="login" element={<><Login /></>}/>
                              <Route index element={<Content />} />
                              <Route path="products/:productId" element={<ProductDetails />} />
                              <Route path="modifyproduct/:productId" element={<ProductForm />} />
                              <Route path="addproduct" element={<ProductForm />} />
                              <Route path="orders" element={<Order />} />
                              <Route path="*" element={<NotFound />} />
                              </Route>

                        </Routes>     
               </div>
        </CssBaseline>
      
      </ThemeProvider>  
       
    );
};

export default App;
