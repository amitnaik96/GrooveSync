import Home from "./components/Home";
import Listen from "./components/Listen"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return ( 
    <Router>
      <div className="app">
        <Routes>
          <Route path = '/' element = {<Home />}></Route>
          <Route path = '/audios/:videoId' element = {<Listen />}></Route>
        </Routes>
      </div>
    </Router>
   );
}
 
export default App;