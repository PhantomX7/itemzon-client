/**
 *
 * SignInPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Field, reduxForm } from 'redux-form/immutable';
import { compose } from 'redux';
import Container from 'react-bulma-components/lib/components/container';

import TextInput from 'components/TextInput';

import { signin } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class SignInPage extends React.Component {
  handleFormSubmit = values => {
    const { signin } = this.props;
    // console.log(values.toObject());
    signin(values.toObject());
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Helmet>
          <title>SignInPage</title>
          <meta name="description" content="Description of SignInPage" />
        </Helmet>
        <div className="auth-form-section">
          <Container className="flex-center">
            <form
              className="form-container"
              onSubmit={handleSubmit(this.handleFormSubmit)}
            >
              <Field
                name="email"
                component={TextInput}
                label="Email"
                type="email"
              />
              <Field
                name="password"
                component={TextInput}
                label="Password"
                type="password"
              />
              <div className="form-group text-center">
                <button className="btn button-primary w-100 m-0" type="submit">
                  Sign in
                </button>
              </div>
            </form>
          </Container>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const { email, password } = values.toObject();
  const errors = {};
  if (!email) {
    errors.email = 'Please enter an email';
  }

  if (!password) {
    errors.password = 'Please enter a password';
  }

  if (password && password.length < 8) {
    errors.password = 'Password must at least 8 characters';
  }
  // errors is empty, the form is fine to submit
  // if errors has any properties, redux form assumes form is invalid
  return errors;
}

const mapStateToProps = state => {
  const { user } = state.get('auth');
  return { user };
};

const withForm = reduxForm({
  form: 'signin',
  validate,
});
const withConnect = connect(
  mapStateToProps,
  { signin },
);

export default compose(
  withForm,
  withConnect,
)(SignInPage);
