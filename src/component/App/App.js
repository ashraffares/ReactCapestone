import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import PokeInfo from '../../container/PokeInfo';
import PokeList from '../../container/PokeList';
import Navbar from '../navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={PokeList} exact />
        <Route path="/pokemon/:pokemon" component={PokeInfo} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
