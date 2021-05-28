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
import { useTranslation } from 'react-i18next';

interface EditMachinesProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

interface MachineItemProps {
  machineId: string;
}

const EditMachines: FunctionComponent<EditMachinesProps> = ({ open, setOpen }) => {
  const { machines, benchmarks, deleteMachine, addMachine } = useBenchmarks();
  const [isAddingNewMachine, setIsAddingNewMachine] = useState(false);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();

  const handleDeleteMachine = (machineId: string) => deleteMachine(machineId);
  const handleAddMachine = () => setIsAddingNewMachine(true);
  const handleCancelEditing = () => setIsAddingNewMachine(false);
  const handleAddNewMachine = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const machineId = (event.currentTarget.elements.namedItem('machineID') as HTMLInputElement)
      .value;
    const values = benchmarks.map(benchmark =>
      parseInt((event.currentTarget.elements.namedItem(benchmark.id) as HTMLInputElement).value)
    );
    addMachine(machineId, values);
    setIsAddingNewMachine(false);
  };

  const MachineItem: FunctionComponent<MachineItemProps> = ({ machineId }) => (
    <ListItem>
      <ListItemText>{machineId}</ListItemText>
      <ListItemSecondaryAction>
        <Tooltip title="Eliminar">
          <span>
            <IconButton
              disabled={isAddingNewMachine}
              onClick={() => handleDeleteMachine(machineId)}
            >
              <DeleteIcon />
            </IconButton>
          </span>
        </Tooltip>
      </ListItemSecondaryAction>
    </ListItem>
  );

  const NewMachineInput = () => (
    <>
      <ListItem>
        <TextField
          required
          id="new-machine-name"
          name="machineID"
          label={t('modals.editMachines.newMachineId')}
        />
      </ListItem>
      {benchmarks.map(b => (
        <ListItem key={`input-machineValue-${b.id}`}>
          <TextField
            required
            fullWidth
            type="number"
            name={b.id}
            label={t('modals.editMachines.valueForBenchmark', { id: b.id })}
          />
        </ListItem>
      ))}
    </>
  );

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <form onSubmit={handleAddNewMachine}>
        <DialogTitle>{'Editar Máquinas'}</DialogTitle>
        <DialogContent>
          <List>
            {machines.map(machineId => (
              <MachineItem key={`listItem-machine-${machineId}`} machineId={machineId} />
            ))}
            <Collapse in={isAddingNewMachine}>
              <NewMachineInput />
            </Collapse>
          </List>
        </DialogContent>
        <DialogActions>
          {isAddingNewMachine ? (
            <>
              <Button color="secondary" type="reset" onClick={handleCancelEditing}>
                {t('modals.editMachines.cancelEditing')}
              </Button>
              <Button color="primary" type="submit" onClick={handleAddMachine}>
                {t('modals.editMachines.addNewMachine')}
              </Button>
            </>
          ) : (
            <>
              <Button color="primary" onClick={handleAddMachine}>
                {t('modals.editMachines.addMachine')}
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

export default EditMachines;
