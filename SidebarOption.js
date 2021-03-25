import React from 'react';
import './SidebarOption.css';
import {useHistory} from 'react-router-dom';
const SidebarOption=({Icon, title, number, selected, to})=>{
    function onClick(){
        history.push(to);
    }
    const history= useHistory();
    return (
        <div onClick= {onClick} className= {`sidebarOption ${selected&&"sidebarOption--active"}`}>
            <Icon/>
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    );
};
export default SidebarOption;