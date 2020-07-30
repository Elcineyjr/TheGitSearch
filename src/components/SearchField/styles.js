import styled from 'styled-components';
import { Button, InputBase } from '@material-ui/core';
import MuiSearchIcon from '@material-ui/icons/Search';

export const SearchButton = styled(Button)`
  && {
    min-width: 30px;
    background-color: #8c56c2;
    border-radius: 0px 4px 4px 0px;
    :hover {
      background-color: #8c56c2;
    }
  }
`;

export const InputSearchField = styled(InputBase)`
  height: 36px;
  padding-left: 6px;
  border: 1px solid #e1dfe0;
  box-sizing: border-box;
  border-radius: 4px 0 0 4px;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const SearchIcon = styled(MuiSearchIcon)`
  color: white;
`;
