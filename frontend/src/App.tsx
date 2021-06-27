import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingView from './views/Landing';
import { Container } from './styles/GlobalStyle';

function App() {
  return (
    <Router>
      <Fragment>
        <Route path='/' exact component={LandingView} />
        <Container>
          <Switch></Switch>
        </Container>
      </Fragment>
    </Router>
  );
}

export default App;
