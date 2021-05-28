import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

interface AboutProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const About: FunctionComponent<AboutProps> = ({ open, setOpen }) => {
  const { t } = useTranslation();
  const handleClose = () => setOpen(false);

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogTitle>{t('modals.about.title')}</DialogTitle>
      <DialogContent>
        <Typography>{t('modals.about.body')}</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          onClick={handleClose}
          href="https://github.com/reloadedhead/performance-comparator"
        >
          {t('modals.about.repo')}
        </Button>
        <Button color="primary" onClick={handleClose}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default About;
