import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
} from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Formula } from '../../../types';

interface FormulaViewerProps {
  open: boolean;
  formulaName: Formula;
  formulaSource: string;
  setOpen: (value: boolean) => void;
}

/**
 * This Formula Viewer is not ideal. There might be a JS library that
 * parses and renders something like LaTEX or some
 * other formula languages out there. Feel free to investigate 🕵🏼‍♂️
 */
const FormulaViewer: FunctionComponent<FormulaViewerProps> = ({
  open,
  setOpen,
  formulaName,
  formulaSource,
}) => {
  const { t } = useTranslation();
  const handleClose = () => setOpen(false);
  const usesDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const FORMULA_TRANSLATION_MAP: { [key in Formula]: string } = {
    arithmeticMedian: t('formulas.arithmeticMedian'),
    geometricMedian: t('formulas.geometricMedian'),
    weightedArithmeticMedian: t('formulas.weightedArithmeticMedian'),
  };

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogTitle>
        {t('modals.formulaViewer.title', { formula: FORMULA_TRANSLATION_MAP[formulaName] })}
      </DialogTitle>
      <DialogContent>
        <img
          style={{ width: '100%', background: usesDarkMode ? '#fff' : undefined }}
          alt={FORMULA_TRANSLATION_MAP[formulaName]}
          src={formulaSource}
        />
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleClose}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormulaViewer;
