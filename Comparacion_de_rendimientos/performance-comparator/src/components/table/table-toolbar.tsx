import React from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Tooltip,
  IconButton,
} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';

const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
      borderRadius: '4px 4px 0px 0px',
    },
    title: {
      flex: '1 1 100%',
      color: theme.palette.common.white,
    },
    actionButton: {
      color: theme.palette.common.white,
    },
  })
);

export interface ToolbarAction {
  title: string;
  icon: JSX.Element;
  handler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
interface Toolbar {
  isEmpty?: boolean;
  actions?: ToolbarAction[];
}

const TableToolbar = ({ isEmpty, actions }: Toolbar) => {
  const classes = useToolbarStyles();

  return (
    <Toolbar className={classes.root} color="primary">
      <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
        Benchmarks
      </Typography>
      {actions &&
        actions.map(action => (
          <Tooltip key={action.title} title={action.title}>
            <span>
              <IconButton
                aria-label={`${action.title} toolbar action`}
                onClick={action.handler}
                disabled={isEmpty}
                className={classes.actionButton}
              >
                {action.icon}
              </IconButton>
            </span>
          </Tooltip>
        ))}
    </Toolbar>
  );
};

export default TableToolbar;
