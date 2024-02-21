import SearchTypeSelector from 'components/SearchTypeSelector/SearchTypeSelector.jsx';
// import SearchForm from '../SearchForm/SearchForm.jsx';

import css from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={css.wrapper}>
      {/* <SearchForm /> */}
      <SearchTypeSelector />
    </div>
  );
};

export default SearchBar;
