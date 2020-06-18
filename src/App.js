import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { userIdSelector } from './redux/selectors';

// PAGES
import NewsPage from './pages/NewsPage/lazy';
import LoginPage from './pages/LoginPage/lazy';
import ProfilePage from './pages/ProfilePage/lazy';

import Spinner from './assets/icons/spinner';

const App = () => {
  const userId = useSelector((state) => userIdSelector(state));

  return (
    <Switch>
      <Suspense fallback={<Spinner />}>
        <Route exact path="/" component={NewsPage} />
        <Route path="/login" component={LoginPage} />
        {userId ? <Route path="/profile" component={ProfilePage} /> : null}
        <Redirect to="/" />
      </Suspense>
    </Switch>
  );
};

export default App;
