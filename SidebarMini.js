import React, { useState } from 'react';
import './Sidebar.css';
import AddIcon from '@material-ui/icons/Add';
import {Button} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SidebarOption from './SidebarOption';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton, Avatar } from '@material-ui/core';
import NoteIcon from '@material-ui/icons/Note';
import PersonIcon from '@material-ui/icons/Person';
import NearMeIcon from '@material-ui/icons/NearMe';
import PhoneIcon from '@material-ui/icons/Phone';
import DuoIcon from '@material-ui/icons/Duo';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import { openSendMessage} from './features/mailSlice';
const SidebarMini=()=>{
    const dispatch= useDispatch();
    const history= useHistory();
    const [p, setP]=useState([]);
    useEffect(()=>{
        setP(window.location.pathname)
    },)
    return (
        <div className= "sidebar__mini">
            <Button onClick={()=>dispatch(openSendMessage())} startIcon= {<AddIcon fontSize= "large"/>} className= "sidebar__compose__mini"></Button>
            <SidebarOption  Icon= {InboxIcon}  selected= {p==='/'} to= "/" />
            <SidebarOption Icon= {StarIcon} selected= {p==='/starred'} to= "/starred" />
            <SidebarOption Icon= {LabelImportantIcon} selected= {p==='/important'} to= "/important" />
            <SidebarOption Icon= {NearMeIcon} selected= {p==='/sent'} to= "/sent" />
            <SidebarOption Icon= {NoteIcon}  selected= {p==='/drafts'} to= "/drafts" />
            <SidebarOption Icon= {ExpandMoreIcon} selected= {p==='/more'} to= "/more" />
            <div className= "sidebar__footer">
                    <div className= "sidebar__footerIcons">
                        <IconButton>
                            <PersonIcon />
                        </IconButton>
                        <IconButton>
                            <DuoIcon />
                        </IconButton>
                        <IconButton>
                            <PhoneIcon />
                        </IconButton>
                    </div>
            </div>
        </div>

    );
};
export default SidebarMini;