import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from 'theme';

export const NavSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin-right: 16px;
  gap:72px;
  
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    margin-left: 32px;
    margin-right: 32px;
    gap:100px;
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    margin-left: 100px;
  }
`;
export const Navi = styled.nav`
  display: flex;
  gap: 187px;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    margin-left: 100px;
    justify-content: flex-start;
  }
`;

export const NavUl = styled.ul`
  display: none;
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    display: flex;
    gap: 30px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    color: ${({ theme }) => theme.colors.black[200]};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: ${({ theme }) => theme.fontSizes[5]};
    letter-spacing: -0.02em;
    &.active {
    color: ${({ theme }) => theme.colors.green[200]};
  }
`;

export const NavButton = styled.button`
  @media screen and (min-width: ${theme.breakpoints[2]}) {
    display: none;
  }
`;
