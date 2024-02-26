// import FollowUs from 'components/Footer/componentsFooter/FollowUs/FollowUs';
import SocialMedia from 'components/Footer/componentsFooter/FollowUs/FollowUs';
import PopularRecipes from 'components/PopularRecipes/PopularRecipes';
import {
  AddContainer,
  AddSection,
  SubContainer,
  Subtitle,
  Title,
} from './AddRecipePage.styled';
import { useMediaQuery } from 'react-responsive';
import { useScrollToTop } from 'hooks/useScrollToTop';

import AddRecipeForm from 'components/AddRecipeForm/AddRecipeForm';
import { Container } from 'components/common/Container.styled';


export default function AddRecipePage() {
  const isDesctop = useMediaQuery({
    query: '(min-width:1440px)',
  });
  useScrollToTop();
  return (
    <Container>
      <AddSection>
        <Title>Add recipe</Title>
        <AddContainer>
          {/* <div>AddRecipeForm</div> */}
          <AddRecipeForm />

          {/* <TextInputw /> */}
          <div>
            {isDesctop && (
              <SubContainer>
                <Subtitle>Follow us</Subtitle>
                <div>
                  <SocialMedia />
                </div>
              </SubContainer>
            )}
            <SubContainer>
              <Subtitle>Populary recipe</Subtitle>
              <div>
                <PopularRecipes />
              </div>
            </SubContainer>
          </div>
        </AddContainer>
      </AddSection>
    </Container>
  );
}
