import React from 'react';
import "./Social.css";
import './EmailList.css';
import EmailListSection from './EmailListSection';
import EmailListSettingLeft from './EmailListSettingLeft';
function Social(){
    return (
        <div className= "social">
             <div className= "emailList__settings">
                {<EmailListSettingLeft />}
            </div>
            {< EmailListSection/>}
        </div>
    );
}
export default Social;