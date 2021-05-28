import React, { FunctionComponent } from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import { Option } from '../../../types';

interface OptionMenuProps {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
  options: Option[];
}

const OptionMenu: FunctionComponent<OptionMenuProps> = ({ anchorEl, handleClose, options }) => {
  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {options.map(option => (
        <MenuItem
          component={option.component}
          key={option.label}
          onClick={option.handler}
          href={option.href}
        >
          {option.label}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default OptionMenu;
