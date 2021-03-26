import React, {useState, useEffect} from 'react';
import "./EmailListSection.css";
import Section from './Section';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
function EmailListSection(){
    const [p, setP]= useState([]);
    useEffect(()=>{
        setP(window.location.pathname)
    },)
    return (
        <div className= "emailList__sections">
                <Section title= "Primary" Icon= {InboxIcon} selected= {p=="/"} color= "red" to= "/" />
                <Section title= "Social" Icon= {PeopleIcon} selected= {p==="/social"} color= "#1A73E8" to= "/social" />
                <Section title= "Promotions" Icon= {LocalOfferIcon} selected= {p==="/promotion"} color= "green" to= "/promotion" />
        </div>
    );
}
export default EmailListSection;