import React from 'react';
import { AppBar } from '@material-ui/core';
import { useSelector } from 'react-redux';

export default function AppHeader(props) {
  const theme = useSelector((state) => state.theme);

  return (
    <AppBar {...props} style={{ backgroundColor: `${theme.colors.primary}` }} />
  );
}
