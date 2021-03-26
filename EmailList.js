import React, { useState, useEffect } from 'react';
import './EmailList.css';
import EmailRow from './EmailRow';
import EmailListSection from './EmailListSection';
import EmailListSettingLeft from './EmailListSettingLeft';
import EmailListSettingRight from './EmailListSettingRight';
import { db } from './firebase';
function EmailList(){
    const [emails, setEmails]= useState([]);
    useEffect(()=>{
        db.collection('emails').orderBy('timestamp', 'desc').
        onSnapshot(snapshot=> setEmails(snapshot.docs.map(doc=>({
            id: doc.id,
            data: doc.data(),
        }))))
    }, []);
    return (
        <div className= "emailList">
            <div className= "emailList__settings">
                {<EmailListSettingLeft />}
                {<EmailListSettingRight />}
            </div>
            {<EmailListSection/>}
            <div className= "emailList__list">
                {emails.map(({id, data: {message, subject, timestamp, to}})=>(
                    <EmailRow
                        key= {id}
                        id= {id}
                        title= {to}
                        description= {message}
                        time= {new Date(timestamp?.seconds*1000).toUTCString()}
                        subject= {subject}
                    />
                ))}
            </div>
        </div>
    );
}
export default EmailList;
