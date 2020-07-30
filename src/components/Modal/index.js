import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  ModalContainer,
  ModalImg,
  ModalInfoSection,
  ModalTitle,
  ModalInfoRow,
  ModalButton,
  InfoName,
  InfoValue,
  ModalLink,
} from './styles';

import { getUser as apiGetUser } from '~/api';

export default function Modal({ isOpen, setIsOpen, username }) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();

  const getUser = async () => {
    setIsLoading(true);
    try {
      const { data: response } = await apiGetUser(username);
      setUser(response);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const getDateFromString = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return !isLoading ? (
    <ModalContainer open={isOpen}>
      <ModalImg src={user.avatar_url} alt={`${user.name} profile picture`} />

      <ModalInfoSection>
        <ModalTitle>{user.name}</ModalTitle>

        <div>
          <ModalInfoRow>
            <div>
              <InfoName>Username:</InfoName>
              <InfoValue>{user.login}</InfoValue>
            </div>

            <div>
              <InfoName>Seguindo:</InfoName>
              <InfoValue rightItem>{user.following}</InfoValue>
            </div>
          </ModalInfoRow>
          <ModalInfoRow>
            <div>
              <InfoName>Cadastrado(a):</InfoName>
              <InfoValue>{getDateFromString(user.created_at)}</InfoValue>
            </div>

            <div>
              <InfoName>Seguidores:</InfoName>
              <InfoValue rightItem>{user.followers}</InfoValue>
            </div>
          </ModalInfoRow>
          <ModalInfoRow>
            <div>
              <InfoName link>URL:</InfoName>
              <ModalLink href={user.html_url}>{user.html_url}</ModalLink>
            </div>
          </ModalInfoRow>
        </div>

        <div className="end">
          <ModalButton onClick={() => setIsOpen(false)}>Fechar</ModalButton>
        </div>
      </ModalInfoSection>
    </ModalContainer>
  ) : null;
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};
