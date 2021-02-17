import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {ActionsTypes, RootStateType, StoreType} from "./Redux/state";
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type PropsType = {

}

const App = () => {

    return (
        <div className='app'>
            <Header/>
            <div className='app-wrapper'>
                <NavBar/>
                <div className='app-wrapper__content'>
                    <Route path='/profile'
                           render={() => <Profile />}
                    />

                    <Route path='/dialogs'
                           render={() => <DialogsContainer  />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </div>
    );
}


export default App;