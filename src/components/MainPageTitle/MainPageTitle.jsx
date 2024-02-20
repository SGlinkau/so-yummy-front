import { Main, Title, Dot1, Dot2, Dot3 } from './MainPageTitle.styled';

const MainPageTitle = ({ namePage }) => {
  return (
    <Main>
      <Title>{namePage}</Title>
      <Dot1></Dot1>
      <Dot2></Dot2>
      <Dot3></Dot3>
    </Main>
  );
};

export default MainPageTitle;
