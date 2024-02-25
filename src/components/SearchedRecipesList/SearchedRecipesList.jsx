import Loader from 'components/common/Loader/Loader';
import Card from 'components/common/Card/Card';

import css from './SearchedRecipesList.module.css';

import { useSearchContext } from 'contexts/Search.context';

const SearchedRecipesList = () => {
  const { recipes, isLoading } = useSearchContext();

  return (
    <>
      <ul className={css.recipes__list}>
        {recipes.map(({ _id, title, thumb }) => {
          return (
            <li key={_id} className={css.recipes__item}>
              {!isLoading ? (
                <Loader />
              ) : (
                <Card
                  src={thumb}
                  title={title}
                  to={`/recipe/${_id}`}
                  id={_id}
                />
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SearchedRecipesList;
