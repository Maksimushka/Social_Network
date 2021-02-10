import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import store, {StoreType} from "./Redux/state";
import {Route} from 'react-router-dom';

type PropsType = {
    store: StoreType
}

const App: React.FC<PropsType> = (props) => {

    return (
        <div className='app'>
            <Header/>
            <div className='app-wrapper'>
                <NavBar/>
                <div className='app-wrapper__content'>
                    <Route path='/profile'
                           render={() => <Profile dispatch={props.store.dispatch.bind(store)}
                                                  newPostText={props.store._state.profilePage.newPostText}
                                                  posts={props.store._state.profilePage.posts}/>}
                    />

                    <Route path='/dialogs'
                           render={() => <Dialogs dispatch={props.store.dispatch.bind(store)}
                                                  dialogs={props.store._state.dialogsPage.dialogs}
                                                  newMessageText={props.store._state.dialogsPage.newMessageText}
                                                  messages={props.store._state.dialogsPage.messages}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </div>
    );
}


export default App;