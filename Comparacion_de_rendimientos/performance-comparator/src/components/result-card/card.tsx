import React, { FunctionComponent, useState } from 'react';
import {
  Card,
  CardHeader,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import FunctionsIcon from '@material-ui/icons/Functions';
import FormulaViewer from '../modals/formula-viewer';
import { Formula } from '../../types';

interface ResultCardProps {
  title: string;
  formulaName: Formula;
  formulaSource: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      backgroundColor: theme.palette.primary.main,
    },
    title: {
      color: '#fff',
    },
    icon: {
      color: theme.palette.common.white,
    },
  })
);

const ResultCard: FunctionComponent<ResultCardProps> = ({
  title,
  children,
  formulaName,
  formulaSource,
}) => {
  const [isFormulaModalOpen, setIsFormulaModalOpen] = useState(false);
  const classes = useStyles();
  const { t } = useTranslation();

  const toggleFormulaModal = () => setIsFormulaModalOpen(prev => !prev);

  return (
    <Card>
      <CardHeader
        className={classes.header}
        title={
          <Typography className={classes.title} variant="h6">
            {title}
          </Typography>
        }
        subheader={
          <Typography variant="subtitle1" className={classes.title}>
            {t('main.results.subtitle')}
          </Typography>
        }
        action={
          <Tooltip title={t('main.results.openFormula').toString()}>
            <IconButton onClick={toggleFormulaModal}>
              <FunctionsIcon className={classes.icon} />
            </IconButton>
          </Tooltip>
        }
      />
      {children}
      <FormulaViewer
        open={isFormulaModalOpen}
        setOpen={setIsFormulaModalOpen}
        formulaName={formulaName}
        formulaSource={formulaSource}
      />
    </Card>
  );
};

export default ResultCard;
