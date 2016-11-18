import React from'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import { logout } from '../../redux/user'
<<<<<<< HEAD
import NavbarMenu from "./NavbarMenu";
=======
import NavbarMenu from "./NavbarMenu"
>>>>>>> 7d14eea525f78f8993c7b19ebb635f89723c33bc

const mapStateToProps = ({ user }) => ({
  role: !Object.keys(user).length ? 1 : !user.isAdmin ? 2 : 3
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

export const NavbarMenuContainer = connect(mapStateToProps, mapDispatchToProps)(NavbarMenu);
