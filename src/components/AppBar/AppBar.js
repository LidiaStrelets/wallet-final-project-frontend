import React from 'react';
import { useSelector } from 'react-redux';

import Styles from './AppBar.module.css';
//import Navigation from '../Navigation';
import HeaderNav from '../HeaderNav';

import { authSelectors } from '../../redux/auth';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={Styles.container}>
      {isLoggedIn && (
        <>
          <HeaderNav />
        </>
      )}
    </header>
  );
};

export default AppBar;
