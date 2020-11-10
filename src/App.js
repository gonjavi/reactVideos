import VideosList from './components/VideosList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EditVideo from "./components/EditVideo";
import RegisterVideo from './components/RegisterVideo';

function App() {
  return (
    <div className="App">
    <h1>Videos</h1>
    <BrowserRouter>
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
