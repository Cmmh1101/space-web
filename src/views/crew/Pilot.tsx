import SubHeader from '../../components/SubHeader';
import DotNavbar from '../../components/DotNavbar';
import HeaderBox from '../../components/HeaderBox';

const Crew = () => {
  return (
    <div className='crew'>
      <div className='col col-lg-6 sub-header '>
        <SubHeader num={'02'} text={'Meet your crew'} />
        <div className='image'>
          <img src='../../assets/crew/image-victor-glover.webp' />
          <div className='line'></div>
        </div>
      </div>
      <div className='col col-lg-6 crew-content'>
        <div className='dot-navbar'>
          <DotNavbar url='/commander' />
          <DotNavbar url='/flightEngineer' />
          <DotNavbar url='/missionSpecialist' />
          <DotNavbar url='/pilot' />
        </div>

        <div className='header-box'>
          <HeaderBox
            subhead4='Pilot'
            subhead5={'Victor Glover'}
            content={
              'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where  he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'
            }
          />
        </div>
      </div>
    </div>
  );
};
export default Crew;
