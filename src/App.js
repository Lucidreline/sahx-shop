import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user.actions';

import { auth, saveUserToDB } from './firebase/firebase.utils';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Header from './components/header/header.component';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  stopListeningForAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.stopListeningForAuth = auth.onAuthStateChanged(async currentUser => {
      if (currentUser) {
        // this happens when someone signs in/out as long as this is mounted
        const userRef = await saveUserToDB(currentUser);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id, // basicly adds the current user's data to the state along with the id
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(currentUser); // tells the state that the current user is null (if they sign out)
      }
    });
  }

  componentWillUnmount() {
    this.stopListeningForAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route
              exact
              path='/signin'
              render={() =>
                this.props.currentUser ? (
                  <Redirect to='/' />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
