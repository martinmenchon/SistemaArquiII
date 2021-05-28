import React from 'react';
import { CardContent, Chip, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import ResultCard from './card';
import { useBenchmarks } from '../../contexts/benchmarks';
import weightedFormula from '../../static/images/weighted.png';

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

const WeightedResults = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { machines, getWeightedArithmeticMedian } = useBenchmarks();

  return (
    <ResultCard
      title={t('main.results.weightedMedian')}
      formulaName="weightedArithmeticMedian"
      formulaSource={weightedFormula}
    >
      <CardContent>
        {machines.map(weightedByMachineId => (
          <div className={classes.row} key={weightedByMachineId}>
            <Typography>
              {t('main.results.weightedSubtitle', { machineId: weightedByMachineId })}
            </Typography>
            {machines.map(machineId => (
              <Chip
                className={classes.chip}
                key={`weighted-by-${weightedByMachineId}-${machineId}`}
                label={`${machineId}: ${getWeightedArithmeticMedian(
                  machineId,
                  weightedByMachineId
                ).toFixed(2)}`}
              />
            ))}
          </div>
        ))}
      </CardContent>
    </ResultCard>
  );
};

export default WeightedResults;
