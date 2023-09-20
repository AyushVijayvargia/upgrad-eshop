import { combineReducers } from "@reduxjs/toolkit";

const initialState={
    user: {},
    productPageFilters: {
        search: '',
        sortBy: 'Default',
        category: 'All'
    },
    popups: {
        orderPlaced: false,
        productDeleted: '',
        productModified: '',
        productAdded: ''
    }
};
const productOrderReducer = (state = initialState.popups, action) => {
    switch(action.type) {
        case 'productDeleted':
            return {...state, productDeleted: action.payload};
        case 'setProductModified':
            return {...state, productModified: action.payload};
        case 'setProductAdded':
            return {...state, productAdded: action.payload};
        case 'orderPlacedTrue':
            return {...state, orderPlaced: true};
        case 'orderPlacedFalse':
            return {...state, orderPlaced: false};
        default:
            return state;
    }
}

const LoginLogoutReducer = (state = initialState.user, action) => {
    switch(action.type) {
        case 'login':
            sessionStorage.setItem('currentUser', JSON.stringify(action.payload));//set current user
            return action.payload;
        case 'logout':
            sessionStorage.removeItem('currentUser');//remove details
            return {};
        default:
            return state;
    }
}

const productFiltersReducer = (state = initialState.productPageFilters, action) => {
    switch(action.type) {
        case 'searchProducts':
            return {...state, search: action.payload};
        case 'setCategory':
            return {...state, category: action.payload};
        case 'setSortBy':
            return {...state, sortBy: action.payload};
        default:
            return state;
    }
}


//combining
const AppReducer = combineReducers({
    user: LoginLogoutReducer,
    productPageFilters: productFiltersReducer,
    popups: productOrderReducer
  });
    
  export default AppReducer;
