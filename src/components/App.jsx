import React, { lazy, useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routes } from 'constants/routes';
import { PrivatePage, RestrictedPage } from 'pages/access';
import AuthLayout from './AuthLayout/AuthLayout';
import SharedLayout from './SharedLayout/SharedLayout';
import AddRecipePage from 'pages/AddRecipePage/AddRecipePage';
import { useDispatch, useSelector } from 'react-redux';
import { selectAccessToken, selectCurrent } from 'redux/auth/auth.selectors';
import { currentThunk } from 'redux/auth/auth.thunk';
import MainLoader from './MainLoader/MainLoader';

// import CategoriesPage from 'pages/CategoriesPage/CategoriesPage';
// import ErrorPage from 'pages/ErrorPage/ErrorPage';

const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
const SearchPage = lazy(() => import('pages/SearchPage/SearchPage'));
const FavoritePage = lazy(() => import('pages/FavoritePage/FavoritePage'));
const MainPage = lazy(() => import('pages/MainPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

const SigninPage = lazy(() => import('pages/Auth/SigninPage'));
const RegisterPage = lazy(() => import('pages/Auth/RegisterPage'));

const OwnRecipesPage = lazy(() => import('pages/OwnRecipesPage'));
const ShoppingListPage = lazy(() =>
  import('pages/ShoppingListPage/ShoppingListPage')
);

const CategoriesPage = lazy(() =>
  import('pages/CategoriesPage/CategoriesPage')
);
const CategoryRecipes = lazy(() => import('components/CategoryRecipes'));

// const RecipeInfoPage = lazy(() =>
//   import('pages/RecipeInfoPage/RecipeInfoPage')
// );

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectCurrent);
  const accessToken = useSelector(selectAccessToken);
  const isFirst = useRef(true);

  useEffect(() => {
    if (accessToken && isFirst.current) {
      dispatch(currentThunk());
      isFirst.current = false;
    }
  }, [dispatch, accessToken]);

  if (isLoading) return <MainLoader />;

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
          <Route index element={<PrivatePage component={<MainPage />} />} />
          <Route
            path={routes.CATEGORIES_PAGE}
            element={<PrivatePage component={<CategoriesPage />} />}
          >
            <Route path=":categoryName" element={<CategoryRecipes />} />
          </Route>
          <Route
            path={routes.FAVORITE_PAGE}
            element={<PrivatePage component={<FavoritePage />} />}
          />
          <Route
            path={routes.MY_RECIPES_PAGE}
            element={<PrivatePage component={<OwnRecipesPage />} />}
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
            element={<PrivatePage component={<ShoppingListPage />} />}
          />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Route>
      </Routes>
    </>
  );
};
