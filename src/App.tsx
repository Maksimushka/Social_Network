import React, {useEffect} from 'react';
import './App.scss';
import Settings from './components/Settings/Settings'
import {NavLink, Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import {useDispatch, useSelector} from 'react-redux';
import {initializeApp} from './Redux/app-reducer';
import {RootStoreType} from './Redux/redux-store';
import {Preloader} from './components/common/Preloader/Preloader';
import {Redirect} from 'react-router';
import {Breadcrumb, Layout, Menu} from 'antd';
import HeaderContainer from './components/Header/HeaderContainer';
import Users from './components/Users/Users.';

const {Content, Sider} = Layout;

const App = () => {
    const dispatch = useDispatch()
    const initialized = useSelector<RootStoreType>(state => state.appPage.initialized)
    const catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        e.reason ? alert(e.reason) : alert('some error occurred')
    }

    useEffect(() => {
        dispatch(initializeApp())
        window.addEventListener('unhandledrejection', catchAllUnhandledErrors)

        return () => {
            window.removeEventListener('unhandledrejection', catchAllUnhandledErrors)
        }
    }, [dispatch])

    if (!initialized) {
        return <Preloader/>
    }
    return (
        <Layout>
            <HeaderContainer />
            <Content style={{ width: 1200, margin: '0 auto' }}>
                <Breadcrumb style={{margin: '16px 0'}}>
                </Breadcrumb>
                <Layout style={{padding: '0 24px 24px'}}>
                    <Sider  width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            style={{height: '100%', borderRight: 0}}
                        >
                            <Menu.Item key="1">
                                <NavLink exact to='/profile'>Profile</NavLink>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <NavLink exact to='/dialogs'>Messages</NavLink>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <NavLink exact to='/users'>Users</NavLink>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <NavLink exact to='/settings'>Settings</NavLink>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Content style={{
                            background: '#fff', padding: 24, margin: 0, minHeight: 280,
                        }}>
                        <Route exact path="/" render={() => <Redirect to="/profile"/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/users" render={() => <Users/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                    </Content>
                </Layout>
            </Content>
        </Layout>
    )
}

export default App;