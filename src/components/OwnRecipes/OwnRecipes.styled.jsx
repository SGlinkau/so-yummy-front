import styled from '@emotion/styled';
import { Container } from 'components/common/Container.styled';

export const OwnRecipesSection = styled.section`
  --section-padding-top: 45px;
  --section-padding-bottom: 110px;
  padding-top: var(--section-padding-top);
  padding-bottom: var(--section-padding-bottom);

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    --section-padding-top: 70px;
    --section-padding-bottom: 180px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    --section-padding-top: 90px;
    --section-padding-bottom: 110px;
  }
`;

export const OwnRecipesContainer = styled(Container)``;

export const OwnRecipesTitle = styled.h2`
  --title-margin-bottom: 50px;

  margin-bottom: var(--title-margin-bottom);

  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  color: ${({ theme }) => theme.colors.gray[400]};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    --title-margin-bottom: 100px;

    font-size: 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    font-size: 44px;
  }
`;
