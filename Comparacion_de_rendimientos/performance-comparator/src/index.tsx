import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { useMediaQuery, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import AppShell from './components/app-shell';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { BrowserRouter } from 'react-router-dom';

const WrappedApp = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: {
            main: '#183F6D',
          },
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <WrappedApp />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
