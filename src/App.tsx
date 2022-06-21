import MainNavbar from './components/Navbar';
import Home from './views/Home';
import Destination from './views/Destination';
import Moon from './views/destination/Moon';
import Mars from './views/destination/Mars';
import Europa from './views/destination/Europa';
import Titan from './views/destination/Titan';
import Crew from './views/Crew';
import Commander from './views/crew/Commander';
import FlightEngineer from './views/crew/FlightEngineer';
import MissionSpecialist from './views/crew/MissionSpecialist';
import Pilot from './views/crew/Pilot';
import Technology from './views/Technology';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import LaunchVehicle from './views/spaceLaunch/LaunchVehicle';
import SpaceCapsule from './views/spaceLaunch/SpaceCapsule';
import Spaceport from './views/spaceLaunch/Spaceport';

function App() {
  return (
    <div className='App'>
      <Router>
        <Container fluid className='p-0 m-0'>
     
          <MainNavbar />
          <main className='main'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/destination' element={<Destination />} />
              <Route path='/moon' element={<Moon />} />
              <Route path='/mars' element={<Mars />} />
              <Route path='/europa' element={<Europa />} />
              <Route path='/titan' element={<Titan />} />
              <Route path='/crew' element={<Crew />} />
              <Route path='/commander' element={<Commander />} />
              <Route path='/flightEngineer' element={<FlightEngineer />} />
              <Route
                path='/missionSpecialist'
                element={<MissionSpecialist />}
              />
              <Route path='/pilot' element={<Pilot />} />

              <Route path='/technology' element={<Technology />} />
              <Route path='/launchVehicle' element={<LaunchVehicle />} />
              <Route path='/spaceport' element={<Spaceport />} />
              <Route path='/spaceCapsule' element={<SpaceCapsule />} />
            </Routes>
          </main>
        </Container>
      </Router>
    </div>
  );
}

export default App;
