import styled from 'styled-components';

export const DarkModeText = styled.div`
  margin-left: 8px;
  color: ${(props) => props.theme.colors.text};
`;

export const HomePageLogo = styled.img`
  height: 410px;
  width: 730px;

  /* Fix the home page logo at the center of the screen */
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -205px;
  margin-left: -365px;
`;

export const Background = styled.main`
  ${(props) =>
    props.backgroundImg
      ? `background-image: url(${props.backgroundImg})`
      : `background-color: ${props.theme.colors.background}`};

  background-color: ${(props) => props.theme.colors.background};

  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -1;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Container = styled.div`
  flex: 1 0 auto;
  ${(props) => props.centered && 'width: 70%'};
`;

export const Title = styled.div`
  margin: 50px 0 10px 10px;
  padding-bottom: 10px;
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 21px;
  color: ${(props) => props.theme.colors.text};

  border-bottom: 1px solid #e1dfe0;
`;

export const Footer = styled.footer`
  left: 0;
  bottom: 0;
  height: 36px;
  width: 100%;
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0px -4px 4px rgba(47, 37, 68, 0.15);

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #7b6490;
`;
