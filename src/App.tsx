import Navbar from './components/Navbar';
import Home from './views/Home';
import Destination from './views/Destination';
import Crew from './views/Crew';
import Technology from './views/Technology';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

function App() {
  return (
    <div className='App'>
      <Router>
        <Container fluid className='p-0 m-0'>
          <Navbar />
          <main className='main'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/destination' element={<Destination />} />
              <Route path='/crew' element={<Crew />} />
              <Route path='/technology' element={<Technology />} />
            </Routes>
          </main>
        </Container>
      </Router>
    </div>
  );
}

export default App;
