import React from 'react';
import './App.scss';
import Settings from './components/Settings/Settings'
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect} from 'react-redux';
import {initializeApp} from './Redux/app-reducer';
import {RootStateReduxType} from './Redux/redux-store';
import {Preloader} from './components/common/Preloader/Preloader';

class App extends React.Component<any, any> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app'>
                <HeaderContainer/>
                <Route path='/login' render={() => <Login/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        );
    }
}

const mapStateToProps = (state: RootStateReduxType) => {
    return {
        initialized: state.appPage.initialized
    }
}


export default connect(mapStateToProps, {initializeApp})(App);