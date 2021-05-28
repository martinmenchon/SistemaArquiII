import React, { lazy, Suspense } from 'react';
import { CircularProgress } from '@material-ui/core';
import { Redirect, Route, Switch } from 'react-router-dom';
import { BenchmarksProvider } from '../../../contexts/benchmarks';

const MainPage = lazy(() => import('../../../pages/main'));

const ContentRouter = () => (
  <Suspense fallback={<CircularProgress size={32} />}>
    <BenchmarksProvider>
      <Switch>
        <Route path="/" component={MainPage} />
        <Redirect to="/" />
      </Switch>
    </BenchmarksProvider>
  </Suspense>
);

export default ContentRouter;
