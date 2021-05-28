import React from 'react';
import { CardContent, Chip, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import ResultCard from './card';
import { useBenchmarks } from '../../contexts/benchmarks';
import geometricFormula from '../../static/images/geometric.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chip: {
      margin: theme.spacing(0.5),
    },
    row: {
      marginBottom: theme.spacing(1),
    },
  })
);

const GeometricResults = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { machines, getGeometricMedian } = useBenchmarks();

  return (
    <ResultCard
      title={t('main.results.geometricMedian')}
      formulaName="geometricMedian"
      formulaSource={geometricFormula}
    >
      <CardContent>
        {machines.map(normalizedByMachineId => (
          <div className={classes.row} key={normalizedByMachineId}>
            <Typography>
              {t('main.results.geometricSubtitle', { machineId: normalizedByMachineId })}
            </Typography>
            {machines.map(machineId => (
              <Chip
                className={classes.chip}
                key={`normalized-by-${normalizedByMachineId}-${machineId}`}
                label={`${machineId}: ${getGeometricMedian(
                  machineId,
                  normalizedByMachineId
                ).toFixed(2)}`}
              />
            ))}
          </div>
        ))}
      </CardContent>
    </ResultCard>
  );
};

export default GeometricResults;
