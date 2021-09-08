import { Switch, Route } from 'react-router-dom';
import Poke from '../../component/Poke';
import PokeList from '../../component/PokeList';
import Navbar from '../../component/navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={PokeList} exact />
        <Route path="/pokemon/:pokemon" component={Poke} />
      </Switch>
    </div>
  );
}

export default App;
