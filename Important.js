import React from 'react';
import "./Important.css";
import './EmailList.css';
import EmailListSettingLeft from './EmailListSettingLeft';
function Important(){
    return (
        <div className= "important">
            {< EmailListSettingLeft/>}
        </div>
    );
}
export default Important;