import React, { useState, useEffect } from 'react';
import './EmailList.css';
import Section from './Section';
import EmailRow from './EmailRow';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import EmailListSettingLeft from './EmailListSettingLeft';
import EmailListSettingRight from './EmailListSettingRight';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
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
            <div className= "emailList__sections">
                <Section title= "Primary" Icon= {InboxIcon} selected= {true} color= "red" />
                <Section title= "Social" Icon= {PeopleIcon} selected= {false} color= "#1A73E8" />
                <Section title= "Promotions" Icon= {LocalOfferIcon} selected= {false} color= "green" />
            </div>
            <div className= "emailList__list">
                {console.log(emails)}
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