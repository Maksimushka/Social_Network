import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';


const App = () => {

    return (
        <div className='app'>
            <HeaderContainer />
            <div className='app-wrapper'>
                <NavBar/>
                <div className='app-wrapper__content'>
                    <Route path='/login' render={() => <Login />} />
                    <Route path='/profile/:userId' render={() => <ProfileContainer />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/> }/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </div>
    );
}


export default App;