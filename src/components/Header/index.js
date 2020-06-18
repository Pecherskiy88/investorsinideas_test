import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit">
            <NavLink className={classes.link} to="/">
              News
            </NavLink>
          </Button>
          <div>
            <Button color="inherit">
              <NavLink className={classes.link} to="/profile">
                Profile
              </NavLink>
            </Button>
            <Button color="inherit">
              <NavLink className={classes.link} to="/login">
                Login
              </NavLink>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
