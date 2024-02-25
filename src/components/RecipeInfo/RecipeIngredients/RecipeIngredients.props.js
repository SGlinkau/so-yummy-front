import PropTypes from 'prop-types';
import { RecipeIngredietItemPropTypes } from './RecipeIngredietItem/RecipeIngredientItem.props';

export const RecipeIngredientsPropTypes = {
  ingredients: PropTypes.arrayOf(RecipeIngredietItemPropTypes.ingredient)
    .isRequired,
};
