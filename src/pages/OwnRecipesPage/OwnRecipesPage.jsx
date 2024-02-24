import { useScrollToTop } from 'hooks/useScrollToTop';
import OwnRecipes from 'components/OwnRecipes/OwnRecipes';

export default function OwnRecipesPage() {
  useScrollToTop();
  return <OwnRecipes />;
}
