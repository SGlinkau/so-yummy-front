import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import SearchContextProvider from 'contexts/Search.context';
import { useScrollToTop } from 'hooks/useScrollToTop';
import useAppPagination from 'hooks/useAppPagination';
import { searchService } from 'services/recipe.service';

import css from './SearchPage.module.css';
import { Container } from 'components/common/Container.styled';
import SearchBar from 'components/SearchBar/SearchBar';
import SearchedRecipesList from 'components/SearchedRecipesList/SearchedRecipesList';
import MainPageTitle from 'components/MainPageTitle/MainPageTitle';
import NeedSearching from 'components/NeedSearching/NeedSearching';

const SearchPage = () => {
  useScrollToTop();
  const [params] = useSearchParams();
  const searchParams = Object.fromEntries(params);
  const [recipes, setRecipes] = useState(null);
  const [query, setQuery] = useState(() => searchParams.value ?? '');
  const [type, setType] = useState(() => {
    switch (searchParams.type) {
      case 'ingredient':
        return 'ingredient';
      case 'title':
      default:
        return 'title';
    }
  });
  const [isLoading, setIsLoading] = useState(false);
  const isTabletOrMobile = useMediaQuery({
    maxWidth: 1439,
  });

  const pagination = useRef({
    page: 1,
    totalPages: 1,
    limit: isTabletOrMobile ? 6 : 12,
  });

  const { Component: Pagination } = useAppPagination({
    totalPages: pagination.current.totalPages,
    page: pagination.current.page,
    onFetch: p => fetchData(p, pagination.current.limit),
  });

  const updateQuery = value => {
    setQuery(value);
  };

  const updateType = value => {
    setType(value);
  };

  const fetchData = useCallback(
    async (p = 1, l = pagination.current.limit) => {
      const searchQuery = query.trim();
      if (searchQuery.length === 0 || !type) return;

      setIsLoading(true);
      try {
        const { data } = await searchService(type, searchQuery, p, l);
        const { recipes, limit, page, total } = data;

        pagination.current.totalPages = Math.ceil(total / limit);
        pagination.current.page = page;

        setRecipes(recipes);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    },
    [query, type]
  );

  useEffect(() => {
    pagination.current.limit = isTabletOrMobile ? 6 : 12;

    fetchData(1, pagination.current.limit);
  }, [fetchData, isTabletOrMobile]);

  return (
    <section className={css.searchPage}>
      <Container>
        <MainPageTitle namePage={'Search'} />
        <SearchContextProvider
          value={{
            recipes,
            query,
            type,
            isLoading,
            updateQuery,
            updateType,
            fetchData,
          }}
        >
          <SearchBar />
          {recipes ? (
            <div className={css.wrapper}>
              <SearchedRecipesList />
              {pagination.current.totalPages > 1 && <Pagination />}
            </div>
          ) : (
            <>{!isLoading && <NeedSearching />}</>
          )}
        </SearchContextProvider>
      </Container>
    </section>
  );
};

export default SearchPage;
