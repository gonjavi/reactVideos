import VideosList from './components/VideosList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EditVideo from "./components/EditVideo";
import RegisterVideo from './components/RegisterVideo';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/"  component={VideosList} />
        <Route path="/edit/:id" component={EditVideo} />
        <Route path="/new" component={RegisterVideo} />
      </Switch>
    </BrowserRouter>      
  </div>
  );
}

export default App;
