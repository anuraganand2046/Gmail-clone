import React from 'react';
import "./Drafts.css";
import './EmailList.css';
import EmailListSettingLeft from './EmailListSettingLeft';
function Drafts(){
    return (
        <div className= "sent">
            {< EmailListSettingLeft/>}
        </div>
    );
}
export default Drafts;