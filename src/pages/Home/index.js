import React, { useState } from 'react';
import { Toolbar } from '@material-ui/core';

import backgroundImg from '~/images/Background.svg';
import headerLogo from '~/images/AppBarLogo.svg';
import homePageLogo from '~/images/Logotype.svg';

import AppHeader from '~/components/AppHeader';
import { AppHeaderLogo } from '~/components/AppHeaderLogo/styles';
import SearchField from '~/components/SearchField';
import List from '~/components/List';
import Modal from '~/components/Modal';

import { HomePageLogo, Background, Container, Title, Footer } from './styles';

import { search } from '~/api';

function Home() {
  const [clickedToSearch, setClickedToSearch] = useState(false);
  const [searchedUsername, setSearchedUsername] = useState();
  const [usersList, setUsersList] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [username, setUsername] = useState();
  const [error, setError] = useState(false);

  const searchUsername = async (usernameToSearch) => {
    try {
      // prevents calling github api with a empty usernameToSearch
      if (usernameToSearch) {
        setSearchedUsername(usernameToSearch);
        const { data: response } = await search(usernameToSearch);
        setUsersList(response.items);
        setClickedToSearch(true);
      }
    } catch (e) {
      setError(true);
    }
  };

  const handleUserClick = (user) => {
    setModalIsOpen(true);
    setUsername(user.login);
  };

  return (
    <>
      <Background backgroundImg={clickedToSearch ? backgroundImg : null} />

      <AppHeader position="static">
        <Toolbar>
          <AppHeaderLogo src={headerLogo} alt="Header logo" />

          <SearchField handleSearch={searchUsername} />
        </Toolbar>
      </AppHeader>

      {!clickedToSearch ? (
        <Container>
          <HomePageLogo src={homePageLogo} alt="The Git Search" />
        </Container>
      ) : (
        <Container centered>
          <Title>{`Resultados para: ${searchedUsername}`}</Title>

          <List usersList={usersList} onUserClick={handleUserClick} />

          {modalIsOpen && (
            <Modal
              isOpen={modalIsOpen}
              setIsOpen={setModalIsOpen}
              username={username}
            />
          )}
        </Container>
      )}

      <Footer>Projetado por: Elciney Júnior - 25/07/2020</Footer>
    </>
  );
}

export default Home;
