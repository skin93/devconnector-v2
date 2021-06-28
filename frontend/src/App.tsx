import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './views/auth/Register';
import Login from './views/auth/Login';
import Landing from './views/Landing';
import { Container } from './styles/GlobalStyle';

function App() {
  return (
    <Router>
      <Fragment>
        <Route path='/' exact component={Landing} />
        <Container>
          <Switch>
            <Route path='/register' exact component={Register} />
            <Route path='/login' exact component={Login} />
          </Switch>
        </Container>
      </Fragment>
    </Router>
  );
}

export default App;
