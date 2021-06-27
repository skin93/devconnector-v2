import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './views/auth/Register';
import LandingView from './views/Landing';
import { Container } from './styles/GlobalStyle';

function App() {
  return (
    <Router>
      <Fragment>
        <Route path='/' exact component={LandingView} />
        <Container>
          <Switch>
            <Route path='/register' exact component={Register} />
          </Switch>
        </Container>
      </Fragment>
    </Router>
  );
}

export default App;
