import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getCategoriesThunk } from 'redux/recipes/recipes.thunk';

export default function CategoriesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  return (
    <CategoriesPageSection>
      <Container>
        <CategoriesPageTitle>Categories</CategoriesPageTitle>

        <Suspense fallback={<MainLoader />}>
          <Outlet />
        </Suspense>
      </Container>
    </CategoriesPageSection>
  );
}
