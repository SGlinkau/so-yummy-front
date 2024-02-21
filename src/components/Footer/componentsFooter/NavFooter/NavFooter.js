import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'constants/routes';

import css from './NavFooter.module.css';

const NavFooter = () => {
  return (
    <>
      <ul className={css.nav__list}>
        <li className={css.nav__item}>
          <Link
            to={`${routes.SEARCH_PAGE}?type=ingredient`}
            className={css.nav__link}
          >
            Ingredients
          </Link>
        </li>
        <li className={css.nav__item}>
          <Link to={routes.ADD_RECIPE_PAGE} className={css.nav__link}>
            Add recipes
          </Link>
        </li>
        <li className={css.nav__item}>
          <Link to={routes.MY_RECIPES_PAGE} className={css.nav__link}>
            My recipes
          </Link>
        </li>
        <li className={css.nav__item}>
          <Link to={routes.FAVORITE_PAGE} className={css.nav__link}>
            Favorite
          </Link>
        </li>
        <li className={css.nav__item}>
          <Link to={routes.SHOPPING_LIST_PAGE} className={css.nav__link}>
            Shopping list
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavFooter;
