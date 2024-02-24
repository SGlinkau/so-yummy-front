import styled from '@emotion/styled';

export const OwnRecipesListStyled = styled.ul`
  --list-gap: 20px;

  display: flex;
  flex-direction: column;
  gap: var(--list-gap);

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    --list-gap: 42px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    --list-gap: 55px;
  }
`;
