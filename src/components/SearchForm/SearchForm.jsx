import React from 'react';
import css from './SearchForm.module.css';

import { useSearchContext } from 'contexts/Search.context';

const SearchForm = () => {
  const { query, updateQuery, fetchData } = useSearchContext();

  const handleChange = e => {
    updateQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.length === 0) {
      return;
    }

    fetchData();
  };

  return (
    <div className={css.formWrapper}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.form__input}
          type="text"
          name="name"
          value={query}
          onChange={handleChange}
          placeholder="Search..."
        />
        <button type="submit" className={css.form__button}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
