import React, { useState, useEffect} from 'react';
import './Starred.css';
import EmailListSettingLeft from './EmailListSettingLeft';
import EmailListSettingRight from './EmailListSettingRight';
import EmailRow from './EmailRow';
import { db } from './firebase';
function Starred(){
    const [starred, setStarred]= useState([]);
    useEffect(()=>{
        db.collection('emails').orderBy('timestamp', 'desc').
        onSnapshot(snapshot=> setStarred(snapshot.docs.map(doc=>({
            id: doc.id,
            data: doc.data(),
        })).filter((obj)=>{
            return obj.data.starred;
        })))
    }, []);
    return (
        <div className= "starred">
            <div className= "starred__settings">
                {<EmailListSettingLeft />}
                {<EmailListSettingRight />}
            </div>
            <div className= "starredList__list">
                {starred.map(({id, data: {message, subject, timestamp, to}})=>(
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
export default Starred;
