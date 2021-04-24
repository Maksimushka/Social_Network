import {Link, withRouter} from 'react-router-dom';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootStoreType} from '../../Redux/redux-store';
import {setLogout} from '../../Redux/auth-page/auth-actions';
import s from './Header.module.scss';
import userPhoto from '../../assets/img/user.png';
import {authReducerType} from '../../Redux/auth-page/auth-reducer';
import {Button, Col, Layout, Row} from 'antd';

const {Header} = Layout;

const HeaderContainer: React.FC = () => {

    const dispatch = useDispatch()
    const {isAuth, photo} = useSelector<RootStoreType, authReducerType>(state => state.auth)

    const onSetLogout = () => {
        dispatch(setLogout())
    }

    const styleForCol = {display: 'flex', justifyContent: 'center', alignItems: 'center'}

    return (
        <Header className="header">
            <Row>
                <Col span={20}>
                    <div style={styleForCol} className={s.logo}>
                        <Link to="/profile" className={s.a}>
                            <img
                                src="https://www.amic.ru/project/all/architecture-barnaul/images/tild3630-6134-4437-b138-623638326363__medicallogopng32.jpeg"
                                alt="logo"/>
                        </Link>
                    </div>
                </Col>

                {isAuth
                    ?
                    <>
                        <Col style={styleForCol} xs={2}>
                            <img className={s.userPhoto} src={photo !== null ? photo : userPhoto}
                                 alt="userPhoto"/>
                        </Col>
                        <Col style={styleForCol} span={2}>
                            <Button onClick={onSetLogout}>Log out</Button>
                        </Col>
                    </>
                    :
                    <Col style={styleForCol} span={4}>
                        <Button>
                            <Link to={'/login'}>Login</Link>
                        </Button>
                    </Col>
                }
            </Row>
        </Header>

    )
}

let WithHeaderRout = withRouter(HeaderContainer)

export default WithHeaderRout;