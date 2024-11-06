import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import {
  Link as RouterLink,
  useLocation,
} from 'react-router-dom';

function LinkRouter(props) {
  return <Link {...props} color='white' component={RouterLink} />;
}

const Menu = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <LinkRouter underline="hover" color="inherit" to="/">
        Home
      </LinkRouter>
      {pathnames.map((value, index) => {
        if (value === 'details') return null;

        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return last ? (
          <Typography key={to} sx={{ color: 'text.disabled' }}>
            {pathnames.includes('details') && index === pathnames.length - 1 ? `Product ${value}` : value}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {value}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
};

export default Menu;
