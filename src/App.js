import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// PAGES
import NewsPage from './pages/NewsPage/lazy';

import Spinner from './assets/icons/spinner';

const App = () => {
  return (
    <Switch>
      <Suspense fallback={<Spinner />}>
        <Route exact path="/" component={NewsPage} />
        <Redirect to="/" />
      </Suspense>
    </Switch>
  );
};

export default App;
