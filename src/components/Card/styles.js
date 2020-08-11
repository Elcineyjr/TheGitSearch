import styled from 'styled-components';
import { Button as MuiButton } from '@material-ui/core';

export const CardContainer = styled.div`
  width: 230px;
  height: 270px;
  margin: 10px;
  background: ${(props) => props.theme.colors.card.background};
  box-shadow: 0px 0px 6px rgba(47, 37, 68, 0.25);
  border-radius: 10px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transition: 0.4s;
  }
`;

export const CardInfo = styled.div`
  padding: 10px;
`;

export const Photo = styled.img`
  object-fit: cover;
  width: 230px;
  height: 130px;
  border-radius: 10px 10px 0px 0px;
`;

export const Username = styled.div`
  margin-bottom: 4px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: ${(props) => props.theme.colors.card.username};
`;

export const Link = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: ${(props) => props.theme.colors.card.link};
`;

export const Score = styled.div`
  margin-top: 8px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: ${(props) => props.theme.colors.card.score};
`;

export const Button = styled(MuiButton)`
  && {
    /* button */
    background: ${(props) => props.theme.colors.card.button};
    border-radius: 20px;
    margin-top: 16px;
    :hover {
      background: ${(props) => props.theme.colors.card.button};
    }

    /* text */
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: ${(props) => props.theme.colors.card.buttonText};
  }
`;
