import SubHeader from '../../components/SubHeader';
import DotNavbar from '../../components/DotNavbar';
import HeaderBox from '../../components/HeaderBox';

const MissionSpecialist = () => {
  return (
    <div className='crew'>
      <div className='col col-lg-6 sub-header '>
        <SubHeader num={'02'} text={'Meet your crew'} />
      </div>
      <div className='crew-body'>
        <div className='image'>
          <img src='../../assets/crew/image-mark-shuttleworth.webp' />
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
              subhead4='Mission Specialist'
              subhead5={'Mark Shuttleworth'}
              content={
                ' Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MissionSpecialist;
