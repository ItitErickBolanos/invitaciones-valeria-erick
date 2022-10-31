import { Route, Switch } from 'react-router-dom';
import './App.css';
import InvitadoPage from './components/InvitadoPage';

function App({ database }) {
  return (
    <div className="App">
      <main className="main">
        <Switch>
          <Route exact path="/invitado/:id" render={(props) => <InvitadoPage {...props} database={database}/>} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
