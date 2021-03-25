import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import EmailList from './EmailList';
import Mail from './Mail';
import SendMail from './SendMail';
import {useSelector, useDispatch} from 'react-redux';
import {selectSendMessageIsOpen} from './features/mailSlice';
import Layout from './Layout';
import {selectUser, login, logout} from './features/userSlice';
import Starred from './Starred';
import Important from './Important';
import Sent from './Sent';
import Drafts from './Drafts';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { auth } from './firebase';
function App() {
  const SendMessageIsOpen= useSelector(selectSendMessageIsOpen);
  const user= useSelector(selectUser);
  const dispatch= useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
      else{
        dispatch(logout(user));
      }
    })
  }, []);
  return (
    <Router>
      {!user ?(<Login />):
        (<div className="app">
          <Header/>
          <div className= "app__body">
            <Switch>
              <Layout path="/" exact component={EmailList} />
              <Layout path= "/mail" component={Mail} />
              <Layout path= "/starred" component={Starred} />
              <Layout path= "/sent" component={Sent} />
              <Layout path= "/important" component={Important} />
              <Layout path= "/drafts" component={Drafts} />
            </Switch>
          </div>
          {SendMessageIsOpen&&<SendMail/>}
        </div>)
      }
    </Router>
  );
}
export default App;
