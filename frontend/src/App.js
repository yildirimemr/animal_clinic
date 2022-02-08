import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import jwt from "jsonwebtoken";
import {logout} from "./actions/staffActions";

import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import ShowStaffsScreen from "./screens/ShowStaffsScreen";
import StaffLoginScreen from "./screens/StaffLoginScreen";
import HomepageScreen from "./screens/HomepageScreen";
import CreateStaffScreen from "./screens/CreateStaffScreen";
import CreateRecordScreen from "./screens/CreateRecordScreen";
import SearchRecordScreen from "./screens/SearchRecordScreen";
import CustomerDetailScreen from "./screens/CustomerDetailScreen";
import AnimalDetailScreen from "./screens/AnimalDetailScreen";

import Header from "./components/Header";


function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.getItem('staffInfo')) {
            const token = JSON.parse(localStorage.getItem('staffInfo')).token
            const decodedToken = jwt.decode(token, {complete: false});
            const dateNow = new Date();
            if (decodedToken.exp < dateNow.getTime() / 1000) {
                dispatch(logout());
            }
        }
    }, [dispatch])

    return (
        <Router>
            <Header/>
            <main>
                <Switch>
                    <Route path="/" component={HomepageScreen} exact/>
                    <Route path="/show-staffs/" component={ShowStaffsScreen}/>
                    <Route path="/login/" component={StaffLoginScreen}/>
                    <Route path="/create-staff/" component={CreateStaffScreen}/>
                    <Route path="/create-new-record/" component={CreateRecordScreen}/>
                    <Route path="/search-record/" component={SearchRecordScreen}/>
                    <Route path="/customer/:id/" component={CustomerDetailScreen}/>
                    <Route path="/animal/:id/" component={AnimalDetailScreen}/>
                </Switch>
            </main>
        </Router>
    );
}

export default App;
