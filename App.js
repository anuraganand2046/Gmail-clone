import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import EmailList from './EmailList';
import Mail from './Mail';
import SendMail from './SendMail';
import {useSelector, useDispatch} from 'react-redux';
import {selectSendMessageIsOpen} from './features/mailSlice';
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
            <Sidebar />
            <Switch>
              <Route path exact = {true}>
                <EmailList />
              </Route>
              <Route path= "/mail">
                <Mail />
              </Route>
              <Route path= "/starred">
                <Starred />
              </Route>
              <Route path= "/important">
                <Important />
              </Route>
              <Route path= "/sent">
                <Sent />
              </Route>
              <Route path= "/drafts">
                <Drafts />
              </Route>
            </Switch>
          </div>
          {SendMessageIsOpen&&<SendMail/>}
        </div>)
      }
    </Router>
  );
}
export default App;
