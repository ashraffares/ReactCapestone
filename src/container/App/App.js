import { Switch, Route, Redirect } from 'react-router-dom';
import PokeInfo from '../../component/PokeInfo';
import PokeList from '../../component/PokeList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={PokeList} exact />
        <Route path="/pokemon/:pokemon" component={PokeInfo} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
