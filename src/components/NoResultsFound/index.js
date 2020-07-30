import React from 'react';

import { Container, NoResultsText, NoResultsIcon } from './styles';

import noResultsFound from '~/images/noResultsFound.svg';

export default function NoResultsFound() {
  return (
    <Container>
      <NoResultsIcon src={noResultsFound} alt="No results found" />
      <NoResultsText>Desculpe! Nenhum resultado encontrado!</NoResultsText>
    </Container>
  );
}
