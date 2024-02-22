import styled from '@emotion/styled';
import { theme } from 'theme';


export const StyledHeader = styled.header`
  position: relativ;
  
  z-index: 2;

  padding-top: 18px;
  padding-bottom: 50px;
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    padding-bottom: 72px;
  }
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    padding-bottom: 100px;
  }
`;
