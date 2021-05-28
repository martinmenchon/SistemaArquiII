import { makeStyles, Theme, createStyles, CssBaseline, Toolbar } from '@material-ui/core';
import React from 'react';
import Header from './header';
import ContentRouter from './router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

const AppShell = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <Toolbar />
        <ContentRouter />
      </main>
    </div>
  );
};

export default AppShell;
