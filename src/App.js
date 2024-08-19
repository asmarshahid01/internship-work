import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Dashboard}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
