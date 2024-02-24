import styled from '@emotion/styled';

export const CategoriesPageSection = styled.section`
  height: 100%;
  padding-top: 50px;
  padding-bottom: 100px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-top: 72px;
    padding-bottom: 200px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding-top: 100px;
  }
`;

export const CategoriesPageTitle = styled.h2`
  margin-bottom: 50px;

  font-weight: 600;
  font-size: 28px;
  line-height: 1;

  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  color: #001833;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-bottom: 100px;

    font-size: 44px;
  }
`;
