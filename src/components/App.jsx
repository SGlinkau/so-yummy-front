import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routes } from 'constants/routes';
import { PrivatePage, RestrictedPage } from 'pages/access';
import AuthLayout from './AuthLayout/AuthLayout';
import SharedLayout from './SharedLayout/SharedLayout';
import AddRecipePage from 'pages/AddRecipePage/AddRecipePage';
import FavoritePage from 'pages/FavoritePage/FavoritePage';

const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
const SearchPage = lazy(() => import('pages/SearchPage/SearchPage'));
const FavoritePage = lazy(() => import('pages/FavoritePage/FavoritePage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

const SigninPage = lazy(() => import('pages/Auth/SigninPage'));
const RegisterPage = lazy(() => import('pages/Auth/RegisterPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route
          path={routes.WELCOME_PAGE}
          element={<RestrictedPage component={<WelcomePage />} />}
        />

        <Route path={routes.MAIN_PAGE} element={<AuthLayout />}>
          <Route
            path={routes.REGISTER_PAGE}
            element={<RestrictedPage component={<RegisterPage />} />}
          />
          <Route
            path={routes.SIGNIN_PAGE}
            element={<RestrictedPage component={<SigninPage />} />}
          />
        </Route>

        <Route path={routes.MAIN_PAGE} element={<SharedLayout />}>
          <Route index element={<PrivatePage component={<p>MainPage</p>} />} />
          <Route
            path={routes.CATEGORIES_PAGE}
            element={<PrivatePage component={<p>CATEGORIES_PAGE</p>} />}
          >
            <Route path=":categoryName" element={<p>:categoryName</p>} />
          </Route>
          <Route
            path={routes.FAVORITE_PAGE}
            element={<PrivatePage component={<FavoritePage />} />}
          />
          <Route
            path={routes.MY_RECIPES_PAGE}
            element={<PrivatePage component={<p>MY_RECIPES_PAGE</p>} />}
          />
          <Route
            path={routes.ADD_RECIPE_PAGE}
            element={<PrivatePage component={<AddRecipePage />} />}
          />
          <Route
            path={`${routes.RECIPE_PAGE}/:recipeId`}
            element={<PrivatePage component={<p>RECIPE_PAGE</p>} />}
          />
          <Route
            path={routes.SEARCH_PAGE}
            element={<PrivatePage component={<SearchPage />} />}
          />
          <Route
            path={routes.SHOPPING_LIST_PAGE}
            element={<PrivatePage component={<p>SHOPPING_LIST_PAGE</p>} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
