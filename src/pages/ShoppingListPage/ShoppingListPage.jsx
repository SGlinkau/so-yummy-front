import ShoppingList from 'components/ShoppingList/ShoppingList';
import { Container } from '../../components/common/Container.styled';
import { ShoppingListTitle, ShoppingListSection } from './styled';
import { useScrollToTop } from 'hooks/useScrollToTop';

const ShoppingListPage = () => {
  useScrollToTop();

  return (
    <ShoppingListSection>
      <Container>
        <ShoppingListTitle>Shopping list</ShoppingListTitle>
        <ShoppingList />
      </Container>
    </ShoppingListSection>
  );
};

export default ShoppingListPage;
