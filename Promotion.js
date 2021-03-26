import React from 'react';
import "./Promotion.css";
import './EmailList.css';
import EmailListSection from './EmailListSection';
import EmailListSettingLeft from './EmailListSettingLeft';
function Promotion(){
    return (
        <div className= "promotion">
             <div className= "emailList__settings">
                {<EmailListSettingLeft />}
            </div>
            {< EmailListSection/>}
        </div>
    );
}
export default Promotion;