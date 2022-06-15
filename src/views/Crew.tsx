import SubHeader from '../components/SubHeader';
import DotNavbar from '../components/DotNavbar';
import HeaderBox from '../components/HeaderBox';

const Crew = () => {
  return (
    <div className='crew'>
      <div className='col col-lg-5 sub-header '>
        <SubHeader num={'02'} text={'Meet your crew'} />
      </div>
      <div className='crew-body'>
        <div className='image'>
          <img src='../../assets/crew/image-douglas-hurley.webp' />
          <div className='line'></div>
        </div>

        <div className='col col-lg-5 crew-content'>
          <div className='dot-navbar'>
          <DotNavbar url='/commander' />
            <DotNavbar url='/flightEngineer' />
            <DotNavbar url='/missionSpecialist' />
            <DotNavbar url='/pilot' />
          </div>

          <div className='col-lg-5 header-box'>
            <HeaderBox
              subhead4='Commander'
              subhead5={'Douglas Hurley'}
              content={
                ' Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Crew;
