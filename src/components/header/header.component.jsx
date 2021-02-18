import React from 'react';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to="/">
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
       ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
       )}
       <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}

  </div>
  );
//vvv destructure we want the user and of the user qwe want te curren USer, this is the syntax when you want to destructure nested values. en otra palabras dame {este valor} of the user, que al mismo tiempo esta siendo deconstruido del state//
const mapStateToProps = ({user: { currentUser },cart: { hidden }}) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
