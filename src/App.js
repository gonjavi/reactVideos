import VideosList from "./components/VideosList";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EditVideo from "./components/EditVideo";

function App() {
  return (
    <div className="App">
    <h1>videos</h1>
    <BrowserRouter>
      <Switch>
        <Route exact path="/"  component={VideosList} />
        <Route path="/edit/:id" component={EditVideo} />
      </Switch>
    </BrowserRouter>
      
  </div>
  );
}

export default App;
