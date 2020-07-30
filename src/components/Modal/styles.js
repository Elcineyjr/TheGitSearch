import styled from 'styled-components';
import { Dialog, Button } from '@material-ui/core';

export const ModalContainer = styled(Dialog)`
  [role='dialog'] {
    max-width: 980px;
    max-height: 346px;
    width: 980px;
    height: 346px;
    display: flex;
    flex-direction: row;
  }

  background: rgba(47, 37, 68, 0.2);
  backdrop-filter: blur(4px);
`;

export const ModalImg = styled.img`
  margin: 40px 20px 40px 40px;
  object-fit: cover;
  border-radius: 10px;
  width: 266px;
  height: 266px;
`;

export const ModalInfoSection = styled.div`
  width: 100%;
  padding-right: 40px;
  display: grid;
  grid-template-rows: 82px 168px 96px;

  .end {
    text-align: end;
  }
`;

export const ModalTitle = styled.div`
  margin-top: 50px;
  padding-bottom: 10px;
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #2f2544;
  border-bottom: 1px solid #e1dfe0;
`;

export const ModalInfoRow = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const InfoName = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #2f2544;

  ${(props) => props.link && 'margin-bottom: 4px'};
`;

export const InfoValue = styled.div`
  margin-top: 4px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #7b6490;

  ${(props) => props.rightItem && 'text-align: end'};
`;

export const ModalLink = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: #7b6490;
`;

export const ModalButton = styled(Button)`
  && {
    /* button  */
    width: 87px;
    height: 36px;
    border: 1px solid #8c56c2;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 20px 0 40px 0;

    /* text */
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #8c56c2;
  }
`;
