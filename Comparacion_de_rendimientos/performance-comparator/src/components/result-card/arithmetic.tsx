import React from 'react';
import { CardContent, Chip, createStyles, makeStyles, Theme } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import ResultCard from './card';
import { useBenchmarks } from '../../contexts/benchmarks';
import ArithmeticMedian from '../../static/images/arithmeticMedian.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chip: {
      margin: theme.spacing(0.5),
    },
  })
);

const ArithmeticResults = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { machines, getArithmeticMedian } = useBenchmarks();

  const results = machines.map(machineId => ({
    machineId,
    value: getArithmeticMedian(machineId),
  }));
  return (
    <ResultCard
      title={t('main.results.arithmeticMedian')}
      formulaName="arithmeticMedian"
      formulaSource={ArithmeticMedian}
    >
      <CardContent>
        {results.map(result => (
          <Chip
            key={`benchmark-chip-${result.machineId}`}
            label={`${result.machineId}: ${result.value.toFixed(2)}`}
            className={classes.chip}
          />
        ))}
      </CardContent>
    </ResultCard>
  );
};

export default ArithmeticResults;
