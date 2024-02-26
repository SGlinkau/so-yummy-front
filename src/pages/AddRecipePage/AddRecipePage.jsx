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


export default function AddRecipePage() {
  const isDesctop = useMediaQuery({
    query: '(min-width:1440px)',
  });
  useScrollToTop();
  return (
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
  );
}
