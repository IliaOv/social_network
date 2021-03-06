import React, {Component, Suspense} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./Redux/reduxStore";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {

    catchAllUnhandledErrors = (reason, promise) => {
        alert("Some error occurred");
        //console.error(promiseRejectionEvent);
    };

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandlerejection', this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandlerejection', this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/'
                               render={() => <Redirect to='/profile'/>}/>
                        <Route path='/dialogs'
                               render={() => {
                                   return <Suspense fallback={<Preloader/>}>
                                       <DialogsContainer/>
                                   </Suspense>
                               }}/>
                        <Route path='/profile/:userId?'
                               render={() => {
                                   return <Suspense fallback={<Preloader/>}>
                                       <ProfileContainer/>
                                   </Suspense>
                               }}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/login'
                               render={() => <Login/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
};

export default MainApp;