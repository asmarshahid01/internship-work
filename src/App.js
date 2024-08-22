import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <div className='side-container'>
        <h2>Sample Login Page</h2>
      </div>
      <div className='login-container'>
        <Login></Login>
      </div>
    </div>
  );
}

export default App;
