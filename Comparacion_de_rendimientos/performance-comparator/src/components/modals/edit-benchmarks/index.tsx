import {
  Button,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
  Tooltip,
} from '@material-ui/core';
import React, { FormEvent, FunctionComponent, useState } from 'react';
import { useBenchmarks } from '../../../contexts/benchmarks';
import DeleteIcon from '@material-ui/icons/Delete';
import { BenchmarkValues } from '../../../types';
import { useTranslation } from 'react-i18next';

interface EditBenchmarksProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

interface BenchmarkItemProps {
  benchmarkId: string;
}

const EditBenchmarks: FunctionComponent<EditBenchmarksProps> = ({ open, setOpen }) => {
  const { benchmarks, deleteBenchmark, addBenchmark, machines } = useBenchmarks();
  const [isAddingNewBenchmark, setIsAddingNewBenchmark] = useState(false);
  const { t } = useTranslation();
  const handleClose = () => setOpen(false);

  const handleDeleteBenchmark = (benchmarkId: string) => deleteBenchmark(benchmarkId);
  const handleAddBenchmark = () => setIsAddingNewBenchmark(true);
  const handleCancelEditing = () => setIsAddingNewBenchmark(false);
  const handleAddNewBenchmark = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const benchmarkId = (event.currentTarget.elements.namedItem('benchmarkId') as HTMLInputElement)
      .value;
    const values: BenchmarkValues = {};
    machines.forEach(machineId => {
      values[machineId] = parseInt(
        (event.currentTarget.elements.namedItem(machineId) as HTMLInputElement).value
      );
    });
    addBenchmark({ id: benchmarkId, values });
    setIsAddingNewBenchmark(false);
  };

  const BenchmarkItem: FunctionComponent<BenchmarkItemProps> = ({ benchmarkId }) => (
    <ListItem>
      <ListItemText>{benchmarkId}</ListItemText>
      <ListItemSecondaryAction>
        <Tooltip title={t('modals.editBenchmarks.deleteBenchmark').toString()}>
          <span>
            <IconButton
              disabled={isAddingNewBenchmark}
              onClick={() => handleDeleteBenchmark(benchmarkId)}
            >
              <DeleteIcon />
            </IconButton>
          </span>
        </Tooltip>
      </ListItemSecondaryAction>
    </ListItem>
  );

  const NewBenchmarkInput = () => (
    <>
      <ListItem>
        <TextField
          required
          id="new-machine-name"
          name="benchmarkId"
          label={t('modals.editBenchmarks.newBenchmarkId')}
        />
      </ListItem>
      {machines.map(m => (
        <ListItem key={`input-benchmark-${m}`}>
          <TextField
            required
            fullWidth
            type="number"
            name={m}
            label={t('modals.editBenchmarks.valueForMachine', { machine: m })}
          />
        </ListItem>
      ))}
    </>
  );

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <form onSubmit={handleAddNewBenchmark}>
        <DialogTitle>{t('modals.editBenchmarks.title')}</DialogTitle>
        <DialogContent>
          <List>
            {benchmarks.map(benchmark => (
              <BenchmarkItem
                key={`listItem-benchmark-${benchmark.id}`}
                benchmarkId={benchmark.id}
              />
            ))}
            <Collapse in={isAddingNewBenchmark}>
              <NewBenchmarkInput />
            </Collapse>
          </List>
        </DialogContent>
        <DialogActions>
          {isAddingNewBenchmark ? (
            <>
              <Button color="secondary" type="reset" onClick={handleCancelEditing}>
                {t('modals.editBenchmarks.cancelEditing')}
              </Button>
              <Button color="primary" type="submit" onClick={handleAddBenchmark}>
                {t('modals.editBenchmarks.addNewBenchmark')}
              </Button>
            </>
          ) : (
            <>
              <Button color="primary" onClick={handleAddBenchmark}>
                {t('modals.editBenchmarks.addBenchmark')}
              </Button>
              <Button color="primary" onClick={handleClose}>
                OK
              </Button>
            </>
          )}
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default EditBenchmarks;
