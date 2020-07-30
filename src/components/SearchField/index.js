import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchButton,
  SearchIcon,
  InputSearchField,
  Container,
} from './styles';

export default function SearchField({ handleSearch }) {
  const [username, setUsername] = useState('');

  return (
    <Container>
      <InputSearchField
        placeholder="Pesquisar"
        onChange={(event) => setUsername(event.target.value)}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            event.preventDefault();
            handleSearch(username);
          }
        }}
        fullWidth
      />
      <SearchButton onClick={() => handleSearch(username)}>
        <SearchIcon />
      </SearchButton>
    </Container>
  );
}

SearchField.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
