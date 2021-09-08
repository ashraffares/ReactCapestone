import { Switch, Route } from 'react-router-dom';
import Poke from '../../component/Poke';
import PokeList from '../../component/PokeList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={PokeList} exact />
        <Route path="/pokemon/:pokemon" component={Poke} />
      </Switch>
    </div>
  );
}

export default App;
