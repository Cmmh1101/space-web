import SubHeader from '../../components/SubHeader';
import DotNavbar from '../../components/DotNavbar';
import HeaderBox from '../../components/HeaderBox';

const FlightEngineer = () => {
  return (
    <div className='crew'>
      <div className='col col-lg-6 sub-header '>
        <SubHeader num={'02'} text={'Meet your crew'} />
      </div>
      <div className='crew-body'>
        <div className='image'>
          <img src='../../assets/crew/image-anousheh-ansari.webp' />
          <div className='line'></div>
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
              subhead4='Flight Engineer'
              subhead5={'Anousheh Ansari'}
              content={
                ' Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. '
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FlightEngineer;
