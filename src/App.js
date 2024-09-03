import './App.css';
import LoginPage from './pages/LoginPage.js'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" Component={LoginPage}/>
          <Route path="/dashboard" Component={Dashboard}/>
        </Routes>
      </Router>
  );
}

export default App;
