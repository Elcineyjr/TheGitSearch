import React from 'react';
import PropTypes from 'prop-types';
import { Route as ReactRoute } from 'react-router-dom';
import { RouteWrapper } from './styles';

export default function Route({ component: Component, ...rest }) {
  return (
    <ReactRoute
      {...rest}
      render={(props) => (
        <>
          <RouteWrapper>
            <Component {...props} />
          </RouteWrapper>
        </>
      )}
    />
  );
}

Route.propTypes = {
  component: PropTypes.element.isRequired,
};
