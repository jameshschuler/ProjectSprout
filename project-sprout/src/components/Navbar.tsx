import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

interface NavbarProps {
  isAuthenticated: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <NavLink exact to="/" className="default-link">
              Sprout
            </NavLink>
          </Typography>
          {isAuthenticated ? (
            <>
              <Button color="inherit">Signout</Button>
            </>
          ) : (
            <>
              <Button color="inherit">
                <NavLink exact className="default-link" to="/register">
                  Register
                </NavLink>
              </Button>
              <Button color="inherit">
                <NavLink exact className="default-link" to="/signin">
                  Sign In
                </NavLink>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
