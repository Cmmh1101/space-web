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
          image={'../../assets/destination/image-mars.png'}
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
            head3={'Mars'}
            // customClass={'heading-3'}
            content={
              'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!'
            }
          />
        </div>
        <div className='line'></div>
        <div className='distance'>
          <Stats subhead2={'Avg. Distance'} figures={'225 mil. km'} />
          <Stats subhead2={'Est. Travel Time'} figures={'9 months'} />
        </div>
      </div>
    </div>
  );
};
export default Destination;
