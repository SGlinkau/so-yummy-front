import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getCategoriesThunk } from 'redux/recipes/recipes.thunk';
import {
  CategoriesPageSection,
  CategoriesPageTitle,
} from './CategoriesPage.styled';
import { Container } from 'components/common/Container.styled';

export default function CategoriesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <CategoriesPageSection>
      <Container>
        <CategoriesPageTitle>Categories</CategoriesPageTitle>

        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
    </CategoriesPageSection>
  );
}
