import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import { IconButton, Tooltip } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Option } from '../../../types';
import OptionMenu from '../../menus/option-menu';
import About from '../../modals/about';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginLeft: theme.spacing(2),
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    title: {
      flexGrow: 1,
    },
    icon: {
      color: theme.palette.common.white,
    },
  })
);

const Header = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [openAbout, setOpenAbout] = useState(false);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOpenAbout = () => {
    setOpenAbout(true);
    setAnchorEl(null);
  };

  const handleCloseMenu = () => setAnchorEl(null);

  const menuOptions: Option[] = [
    {
      label: t('header.menu.class'),
      href: 'http://arqui2.alumnos.exa.unicen.edu.ar/',
      component: 'a',
    },
    {
      label: t('header.menu.bugReport'),
      component: 'a',
      href: 'mailto:martinmenchon@gmail.com',
    },
    {
      label: t('header.menu.about'),
      component: 'button',
      handler: handleOpenAbout,
    },
  ];

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap className={classes.title}>
          {t('header.title')}
        </Typography>
        <Tooltip title={t('header.moreMenu').toString()}>
          <IconButton onClick={handleOpenMenu}>
            <MoreVertIcon className={classes.icon} />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <OptionMenu anchorEl={anchorEl} handleClose={handleCloseMenu} options={menuOptions} />
      <About open={openAbout} setOpen={setOpenAbout} />
    </AppBar>
  );
};

export default Header;
