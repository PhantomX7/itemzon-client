/**
 *
 * Navbar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';
import Container from 'react-bulma-components/lib/components/container';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Dropdown from 'react-bulma-components/lib/components/dropdown';
import logo from 'images/Picture1.png';

import './navbar.scss';

/* eslint-disable react/prefer-stateless-function */
class NavbarMain extends React.Component {
  state = {
    open: false,
  };

  render() {
    const { user } = this.props;
    return (
      <div className="navbarmain">
        <Container>
          <Navbar active={this.state.open}>
            <Navbar.Brand>
              <Navbar.Item renderAs="a" href="#">
                <img
                  src={logo}
                  alt="Bulma: a modern CSS framework based on Flexbox"
                  style={{ height: '50px' }}
                />
              </Navbar.Item>
              <Navbar.Burger
                onClick={() => {
                  this.setState(state => ({
                    open: !state.open,
                  }));
                }}
              />
            </Navbar.Brand>
            <Navbar.Menu>
              <Navbar.Container>
                <Navbar.Item renderAs="div">
                  <NavLink to="/home">Home</NavLink>
                </Navbar.Item>
                <Navbar.Item renderAs="div">
                  <NavLink to="/browse">Browse</NavLink>
                </Navbar.Item>
              </Navbar.Container>
              <Navbar.Container position="end">
                {user ? (
                  <Navbar.Item renderAs="div">{user.username}</Navbar.Item>
                ) : (
                  <Navbar.Item renderAs="div">
                    <Dropdown value="Sign in">
                      <Dropdown.Item value="signin">
                        <NavLink to="/signin">Sign in</NavLink>
                      </Dropdown.Item>
                      <Dropdown.Item value="register">
                        <NavLink to="/register">Register</NavLink>
                      </Dropdown.Item>
                    </Dropdown>
                  </Navbar.Item>
                )}
              </Navbar.Container>
            </Navbar.Menu>
          </Navbar>
        </Container>
      </div>
    );
  }
}

Navbar.propTypes = {};

export default NavbarMain;
