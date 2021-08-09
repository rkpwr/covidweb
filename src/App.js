import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard";
import About from "./Components/About/About";
import Header from "./Header/Header";
import Resource from "./Components/Resource/Resource";
function App() {
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <Route path="/covidweb" component={ Home} exact/>
      <Route path="/dashboard" component={ Dashboard}/>
      <Route path="/resource" component={ Resource}/>
      <Route path="/about" component={ About}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
