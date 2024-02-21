// import FollowUs from 'components/Footer/componentsFooter/FollowUs/FollowUs';
import { AddContainer, AddSection, SubContainer, Subtitle, Title,  } from './AddRecipePage.styled';
import { useMediaQuery } from 'react-responsive';

export default function AddRecipePage() {
  const isDesctop = useMediaQuery({
    query: '(min-width:1440px)',
  });
  return (
    <AddSection>
      <Title>Add recipe</Title>
      <AddContainer>
        <div>add recipe form</div>
        <div>
          {isDesctop && (
            <SubContainer>
              <Subtitle>Follow us</Subtitle>
              <div>{/* <FollowUs /> */}</div>
            </SubContainer>
          )}
          <SubContainer>
            <Subtitle>Populary recipe</Subtitle>
            <div>list</div>
          </SubContainer>
        </div>
      </AddContainer>
    </AddSection>
  );
}
