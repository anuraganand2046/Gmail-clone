import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { auth } from './firebase';
import {useSelector, useDispatch} from 'react-redux';
import {logout, selectUser} from './features/userSlice';
const Header=()=>{
    const user= useSelector(selectUser);
    const dispatch= useDispatch();
    const signOut=()=>{
        auth.signOut().then(()=>{
            dispatch(logout());
        })
    }
    return (
        <div className= "header">
            <div className= "header__left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img src= "https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt= ""></img>
            </div>
            <div className= "header__middle">
                <SearchIcon></SearchIcon>
                <input type= "text" placeholder= "Search Mail"></input>
                <ArrowDropDownIcon className= "header__inputCaret" />
            </div>
            <div className= "header__right">
            <IconButton>
                <AppsIcon/>
            </IconButton>
            <IconButton>
            <NotificationsIcon/>
            </IconButton>
            <Avatar style= {{cursor:"pointer"}} src= {user?.photoUrl} onClick= {signOut} />
            </div>
        </div>
    );
}
export default Header;