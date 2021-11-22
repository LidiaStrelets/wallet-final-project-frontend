import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { authSelectors } from '../../redux/auth';
import svgCurren from '../../images/dollar-icon.svg';
import style from '../Navigation/Navigation.module.css';

export default function Navigation() {
  const isLogin = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav className={style.container}>
      <div className={style.nav__link}>
        {isLogin && (
          <>
            <NavLink to="/home" className={style.home}>
             <svg version="1.1"  viewBox="0 0 32 32" className={style.home__svg}>
              <title>home</title>
              <path fill="#4a56e2" d="M3.556 0c-1.964 0-3.556 1.592-3.556 3.556v0 24.889c0 1.964 1.592 3.556 3.556 3.556v0h24.889c1.964 0 3.556-1.592 3.556-3.556v0-24.889c0-1.964-1.592-3.556-3.556-3.556v0h-24.889zM13.867 17.988v6.901h-5.333v-9.202h-3.2l10.667-10.354 10.667 10.354h-3.2v9.202h-5.333v-6.901h-4.267z"></path>
             </svg>
              <span className={style.home__word}>Главная</span>
            </NavLink>

            <NavLink to="/statistic" className={style.statis}>
              <svg version="1.1"  viewBox="0 0 32 32" className={style.statis__svg}>
                <title>statis</title>
                <path fill="#6e78e8" d="M3.556 0h24.889c1.964 0 3.556 1.592 3.556 3.556v24.889c0 1.964-1.592 3.556-3.556 3.556h-24.889c-1.964 0-3.556-1.592-3.556-3.556v-24.889c0-1.964 1.592-3.556 3.556-3.556zM26.181 13.63c1.244 0 2.263-1.067 2.263-2.372 0-1.303-1.019-2.37-2.263-2.37s-2.263 1.067-2.263 2.37c0 0.213 0.023 0.416 0.080 0.604l-4.016 4.22c-0.167-0.053-0.36-0.084-0.56-0.084-0.009 0-0.019 0-0.028 0l0.001-0c-0.206 0-0.409 0.023-0.59 0.084l-2.885-3.022c0.051-0.176 0.080-0.378 0.080-0.587 0-0.011-0-0.021-0-0.032l0 0.002c0-1.303-1.019-2.37-2.263-2.37s-2.261 1.067-2.261 2.37c0 0.213 0.021 0.427 0.078 0.617l-5.159 5.392c-0.164-0.053-0.353-0.084-0.549-0.084-0.009 0-0.019 0-0.028 0l0.001-0c-1.244 0-2.263 1.067-2.263 2.372 0 1.303 1.019 2.37 2.263 2.37s2.261-1.067 2.261-2.37c0-0.213-0.021-0.416-0.078-0.604l5.147-5.404c0.181 0.059 0.386 0.082 0.588 0.082 0.204 0 0.409-0.023 0.588-0.082l2.885 3.022c-0.051 0.176-0.080 0.378-0.080 0.587 0 0.010 0 0.020 0 0.030l-0-0.002c0 1.305 1.019 2.372 2.263 2.372s2.263-1.067 2.263-2.372c0-0.213-0.023-0.427-0.080-0.615l4.028-4.208c0.18 0.059 0.373 0.084 0.576 0.084z"></path>
              </svg>
              <span className={style.statis__word}>Статистика</span>
            </NavLink>

            <NavLink to="/diagram" className={style.curren}>
              <ReactSVG className={style.curren__svg} src={svgCurren} />
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
