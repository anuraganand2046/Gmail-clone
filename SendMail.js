import React from 'react';
import './SendMail.css';
import {Button} from '@material-ui/core';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import {closeSendMessage} from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase';
function SendMail(){
    const {register, handleSubmit, watch, errors}= useForm();
    const dispatch= useDispatch();
    const onSubmit=(formData)=>{
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            starred: false,
        })
        dispatch(closeSendMessage());
    };
    return (
        <div className= "sendMail">
            <div className= "sendMail__header">
                <h3>New message</h3>
                <CloseIcon className= "sendMail__close"  onClick= {()=>dispatch(closeSendMessage())}/>
            </div>
            <form onSubmit= {handleSubmit(onSubmit)}>
                <input name= "to" placeholder= "To : " type= "email" ref= {register({required: true})} autoComplete= "off"/>
                {errors.to&&<p className= "sendMail__error">To field is required ! </p>}
                <input name= "subject" placeholder= "Subject : " type= "text" ref= {register({required: true})}  autoComplete= "off"/>
                {errors.subject&&<p className= "sendMail__error">Subject field is required ! </p>}
                <input name= "message" placeholder= "Message : " className= "sendMail__message" type= "text" ref= {register({required: true})}  autoComplete= "off"/>
                {errors.message&&<p className= "sendMail__error">Message field is required ! </p>}
                <div className= "sendMail__options">
                    <Button
                    className= "sendMail__send"
                    variant= "contained"
                    color= "primary"
                    type="submit"
                    >Send</Button>
                </div>
            </form>
        </div>
    );
}
export default SendMail;