import React from 'react';
import { Route, Switch } from 'react-router-dom';

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
    this.stopListeningForAuth = auth.onAuthStateChanged(async currentUser => {
      if (currentUser) {
        // this happens when someone signs in/out as long as this is mounted
        const userRef = await saveUserToDB(currentUser);

        userRef.onSnapshot(snapShot => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id, // basicly adds the current user's data to the state along with the id
                ...snapShot.data(),
              },
            },
            () => console.log(this.state)
          );
        });
      } else {
        this.setState({ currentUser }); // tells the state that the current user is null (if they sign out)
      }
    });
  }

  componentWillUnmount() {
    this.stopListeningForAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
