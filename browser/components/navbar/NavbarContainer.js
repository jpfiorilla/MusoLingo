import React from'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import { logout } from '../../redux/user'
import NavbarMenu from "./NavbarMenu"
import { setKeys } from "../../redux/UserKeyActions"

const mapStateToProps = ({ user, numOfKeys, keys, slides, lessons }) => ({
  numOfKeys,
  user,
  keys,
  slides,
  lessons,
  role: !Object.keys(user).length ? 1 : !user.isAdmin ? 2 : 3
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  getKeys: (id) => dispatch(setKeys(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

export const NavbarMenuContainer = connect(mapStateToProps, mapDispatchToProps)(NavbarMenu);
