import { BrowserRouter, Route, Switch } from 'react-router-dom';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Login from '../src/pages/login/login';
import Register from './pages/register/register';
import ErrorPage from '../src/pages/errorpage/errorPage';
import HomePage from '../src/pages/homepage/homepage';
import Search from '../src/pages/search/search';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/search" component={Search} />
          <Route exact path="*" component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
