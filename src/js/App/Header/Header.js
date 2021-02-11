import React, { Fragment } from 'react';
import Tools from './Tools';
import UnAuthtedHeader from './UnAuthtedHeader';
import AppFilter from './AppFilter';
import { isFilterEnabled } from '../../utils/isAppNavEnabled';
import { useSelector } from 'react-redux';
import Logo from './Logo';

export const Header = () => {
  const user = useSelector(({ chrome: { user } }) => user);
  return (
    <Fragment>
      <Logo />
      {user && isFilterEnabled && <AppFilter />}
    </Fragment>
  );
};

export const HeaderTools = () => {
  const user = useSelector(({ chrome: { user } }) => user);
  if (!user) {
    return <UnAuthtedHeader />;
  }
  return <Tools />;
};
