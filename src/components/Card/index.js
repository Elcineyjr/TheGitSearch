import React from 'react';
import PropTypes from 'prop-types';

import {
  CardContainer,
  Photo,
  Username,
  CardInfo,
  Link,
  Score,
  Button,
} from './styles';

export default function Card({ user, onUserClick }) {
  return (
    <CardContainer>
      <Photo src={user.avatar_url} alt={`${user.login} avatar`} />

      <CardInfo>
        <Username>{user.login}</Username>
        <Link href={user.html_url}>{user.html_url}</Link>
        <Score>Score: {user.score.toFixed(1)}</Score>
        <Button fullWidth onClick={() => onUserClick(user)}>
          Ver mais
        </Button>
      </CardInfo>
    </CardContainer>
  );
}

Card.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
    html_url: PropTypes.string,
    score: PropTypes.number,
  }).isRequired,
  onUserClick: PropTypes.func.isRequired,
};
