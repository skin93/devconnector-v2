import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Container } from './styles/GlobalStyle';

import Landing from './views/Landing';

import Register from './views/auth/Register';
import Login from './views/auth/Login';
import Dashboard from './views/Dashboard';

import Alert from './features/alert/Alert';

function App() {
  return (
    <Router>
      <Fragment>
        <Route path='/' exact component={Landing} />
        <Container>
          <Alert />
          <Switch>
            <Route path='/register' exact component={Register} />
            <Route path='/login' exact component={Login} />
            <Route path='/dashboard' exact component={Dashboard} />
          </Switch>
        </Container>
      </Fragment>
    </Router>
  );
}

export default App;
