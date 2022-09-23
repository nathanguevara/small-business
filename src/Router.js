import React from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router';
import cookie from 'cookie'
import Login from './components/Login'
import Add from "./containers/Add"
import Listings from "./containers/Listings"
import BizDetails from './containers/BizDetails'

export const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] ? true : false;
  };

const ProtectedRoute = (props) => {
    const {component: Component, } = props;

    return checkAuth() === true ? <Component /> : <Navigate to="/login" />
}

const Router = () => {
    return (
        <Routes>
            <Route exact path="/"  element={<Listings/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/Add" element={<ProtectedRoute component={Add}/>} />
            <Route path="/Listings/:id" element={<BizDetails/>} />
        </Routes>
    );
};

export default Router;