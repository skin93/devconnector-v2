import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';

import Landing from './views/Landing';

import Register from './views/auth/Register';
import Login from './views/auth/Login';
import Dashboard from './views/Dashboard';

import Alert from './features/alert/Alert';
import PrivateRoute from './components/PrivateRoute';
import NotFound from './views/NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Alert />
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/register' exact component={Register} />
          <Route path='/login' exact component={Login} />
          <PrivateRoute path='/dashboard' exact component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
