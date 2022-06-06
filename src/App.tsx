import Navbar from './components/Navbar';
import Home from './views/Home';
import Destination from './views/Destination';
import Crew from './views/Crew';
import Technology from './views/Technology';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/crew' element={<Crew />} />
          <Route path='/technology' element={<Technology />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
