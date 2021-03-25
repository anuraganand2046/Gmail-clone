import React from 'react';
import "./EmailRow.css";
import { Checkbox, IconButton} from '@material-ui/core';
import  StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {selectMail} from './features/mailSlice';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import {db} from './firebase';
function EmailRow({key, time, id, title, subject, description}){
    const history= useHistory();
    const dispatch= useDispatch();
    const openMail=()=>{
        dispatch(selectMail({
            time,
            id,
            title,
            subject,
            description
        }));
        history.push('/mail')
    }
    const star=()=>{
        // db.collection('emails').doc(doc.id).update({
        //     starred: true,
        // })
    };
    return (
        <div className= "row">
            <div className= "emailRow__options">
                <Checkbox/>
                <IconButton>
                    <StarBorderOutlinedIcon onClick= {star}/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>
            <div onClick= {openMail} className= "emailRow">
                <h3 className= "emailRow__title">{title}</h3>
                <div className= "emailRow__message">
                    <h4>
                        {subject}{" "}
                        <span className= "emailRow__description">-{description}</span>
                    </h4>
                </div>
                <p className= "emailRow__time">{time}</p>
            </div>
        </div>
    );
}
export default EmailRow;