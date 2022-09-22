import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./pages/Login";
import Planner from "./pages/Planner";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/planner" element={<Planner />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
