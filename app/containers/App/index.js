/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Component } from 'react';
import { compose } from 'redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import SignInPage from 'containers/SignInPage/Loadable';

import Navbar from 'components/Navbar';

import injectReducer from 'utils/injectReducer';
import reducer from './reducer';

import './index.sass';

import { getMe } from './actions';

class App extends Component {
  componentDidMount() {
    const { token, user, getMe } = this.props;
    if (token && !user) {
      getMe();
    }
  }

  render() {
    const { user } = this.props;
    return (
      <div className="main">
        <Navbar user={user} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SignInPage} />
          <Route exact path="/test" component={() => <div>test</div>} />
          <Route component={NotFoundPage} />
        </Switch>
        <ToastContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { token, user } = state.get('auth');
  return {
    token,
    user,
  };
};

const withConnect = connect(
  mapStateToProps,
  { getMe },
);

const withReducer = injectReducer({ key: 'auth', reducer });

export default compose(
  withRouter,
  withReducer,
  withConnect,
)(App);
