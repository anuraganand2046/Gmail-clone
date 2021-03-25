import React from 'react';
import './EmailList.css';
import { Checkbox, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
function EmailListSettingLeft(){
    return (
        <div className= "emailList__settings">
                <Checkbox />
                <IconButton><ArrowDropDownIcon/></IconButton>
                <IconButton><RedoIcon/></IconButton>
                <IconButton><MoreVertIcon/></IconButton>
        </div>
    );
}
export default EmailListSettingLeft;