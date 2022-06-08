import HeaderBox from '../../components/HeaderBox';
import SecondaryNavbar from '../../components/SecondaryNavbar';
import SubHeader from '../../components/SubHeader';
import Stats from '../../components/Stats';

const Destination = () => {
  return (
    <div className='destination'>
      <div className='col col-lg-6 sub-header'>
        <SubHeader
          num={'01'}
          text={'Pick your destination'}
          image={'../../assets/destination/image-moon.png'}
        />
      </div>
      <div className='col col-lg-6 destination-content'>
        <div className='secondary-navbar'>
          <SecondaryNavbar url='/moon' destination='Moon' />
          <SecondaryNavbar url='/mars' destination='Mars' />
          <SecondaryNavbar url='/europa' destination='Europa' />
          <SecondaryNavbar url='/titan' destination='Titan' />
        </div>
        <div className='header-box'>
          <HeaderBox
            head3={'Moon'}
            // customClass={'heading-3'}
            content={
              'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.'
            }
          />
        </div>
        <div className='line'></div>
        <div className='distance'>
          <Stats subhead2={'Avg. Distance'} figures={'384,400 km'} />
          <Stats subhead2={'Est. Travel Time'} figures={'3 Days'} />
        </div>
      </div>
    </div>
  );
};
export default Destination;
