import React from 'react';
import "./Sent.css";
import './EmailList.css';
import EmailListSettingLeft from './EmailListSettingLeft';
function Sent(){
    return (
        <div className= "sent">
            {< EmailListSettingLeft/>}
        </div>
    );
}
export default Sent;