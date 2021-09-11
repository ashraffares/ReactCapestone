import {
  Switch, Route, Redirect, Router,
} from 'react-router-dom';
import PokeInfo from '../../component/PokeInfo';
import PokeList from '../../component/PokeList';
import Navbar from '../../component/navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
          <Route path="/" component={PokeList} exact />
          <Route path="/pokemon/:pokemon" component={PokeInfo} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
