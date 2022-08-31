import './App.css';
import Purchases from './components/Purchases';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
  
function App() {
   
  return (

    <Router>
        <Routes>
          <Route
            path="/"
            element={<Purchases />}
          />
          <Route
            path="/error"
            element={<Error />}
          />
        </Routes>  
    </Router>
  );
}

export default App;
