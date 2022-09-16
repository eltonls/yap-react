import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./pages/Login";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
