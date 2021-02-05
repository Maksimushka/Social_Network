import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import store, {RootStateType, StoreType} from "./Redux/state";
import {Route} from 'react-router-dom';

type PropsType = {
    store: StoreType
}

const App: React.FC<PropsType> = (props) => {
    const state = props.store.getState();

    return (
        <div className='app'>
            <Header/>
            <div className='app-wrapper'>
                <NavBar/>
                <div className='app-wrapper__content'>
                    <Route path='/profile'
                           render={() => <Profile updateNewPostText={props.store.updateNewPostText.bind(store)}
                                                  newPostText={props.store._state.profilePage.newPostText}
                                                  addPost={props.store.addPost.bind(store)}
                                                  posts={props.store._state.profilePage.posts}/>}/>

                    <Route path='/dialogs'
                           render={() => <Dialogs addMessage={props.store.addMessage.bind(store)}
                                                  dialogs={props.store._state.dialogsPage.dialogs}
                                                  newMessageText={props.store._state.dialogsPage.newMessageText}
                                                  updateNewMessageText={props.store.updateNewMessageText.bind(store)}
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