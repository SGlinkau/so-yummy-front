import styled from '@emotion/styled';

export const Main = styled.main`
  width: 100%;
  padding: 40px 0;
  position: relative;

  @media (min-width: 768px) and (max-width: calc(${({ theme }) =>
      theme.breakpoints.desktop} - 0.2px)) {
    padding: 50px 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 60px 0;
  }
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 50px;

  font-family: ${({ theme }) => theme.fonts.Poppins};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes[6]};
  line-height: 1;
  letter-spacing: -0.02em;

  color: ${({ theme }) => theme.colors.gray[400]};

  @media (min-width: 768px) and (max-width: calc(${({ theme }) =>
      theme.breakpoints.desktop} - 0.2px)) {
    font-size: ${({ theme }) => theme.fontSizes[10]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[7]};
  }
`;

export const Dot1 = styled.div`
  position: absolute;
  top: 10px;
  left: 100px;
  width: 8px;
  height: 8px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.green[200]};
  transform: rotate(25deg);

  @media (min-width: 768px) and (max-width: calc(${({ theme }) =>
      theme.breakpoints.desktop} - 0.2px)) {
    width: 14px;
    height: 14px;
    left: 180px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    left: 250px;
  }
`;

export const Dot2 = styled.div`
  position: absolute;
  top: 40px;
  right: 30px;
  width: 8px;
  height: 8px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.green[200]};
  transform: rotate(25deg);

  @media (min-width: 768px) and (max-width: calc(${({ theme }) =>
      theme.breakpoints.desktop} - 0.2px)) {
    width: 14px;
    height: 14px;
  }
`;

export const Dot3 = styled.div`
  position: absolute;
  bottom: 50px;
  right: 100px;
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.black[400]};
  transform: rotate(25deg);

  @media (min-width: 768px) and (max-width: calc(${({ theme }) =>
      theme.breakpoints.desktop} - 0.2px)) {
    width: 12px;
    height: 12px;
    right: 250px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    right: 380px;
  }
`;
