import React from 'react';
import PropTypes from 'prop-types';

import { ListContainer } from './styles';

import Card from '../Card';
import NoResultsFound from '../NoResultsFound';

export default function List({ usersList, onUserClick }) {
  return usersList?.length > 0 ? (
    <ListContainer>
      {usersList.map((user) => (
        <Card user={user} onUserClick={onUserClick} key={user.id} />
      ))}
    </ListContainer>
  ) : (
    <NoResultsFound />
  );
}

List.propTypes = {
  usersList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onUserClick: PropTypes.func.isRequired,
};
