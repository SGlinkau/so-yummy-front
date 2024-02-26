import styled from '@emotion/styled';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { theme } from '../../theme/theme';

export const AddSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  gap:72px;
  padding-top:50px;
  padding-bottom: 100px;
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    margin-left: 32px;
    gap:100px;
    padding-top:72px;
  padding-bottom: 200px;
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    margin-left: 100px;
    padding-top:100px;
  
  }
`;

export const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    gap: 100px;
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    flex-direction: row;
    column-gap: 121px;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 32px;
  margin-bottom: 100px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.gray[400]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes[6]};
  line-height: ${({ theme }) => theme.fontSizes[6]};
  letter-spacing: -0.02em;
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    font-size: 32px;
    line-height: 32px;
  }
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    font-size: ${({ theme }) => theme.fontSizes[7]};
    line-height: ${({ theme }) => theme.fontSizes[7]};
  }
`;

export const Subtitle = styled.h3`
  color: ${({ theme }) => theme.colors.gray[500]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  line-height: ${({ theme }) => theme.fontSizes[5]};
  letter-spacing: -0.01em;
`;
