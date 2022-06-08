import HeaderBox from '../../components/HeaderBox';
import SecondaryNavbar from '../../components/SecondaryNavbar';
import SubHeader from '../../components/SubHeader';
import Stats from '../../components/Stats';

const Destination = () => {
  return (
    <div className='destination'>
      <div className='sub-header'>
        <SubHeader
          num={'01'}
          text={'Pick your destination'}
          image={'../../assets/destination/image-europa.png'}
        />
      </div>

      <div className='secondary-navbar'>
        <SecondaryNavbar url='/moon' destination='Moon' />
        <SecondaryNavbar url='/mars' destination='Mars' />
        <SecondaryNavbar url='/europa' destination='Europa' />
        <SecondaryNavbar url='/titan' destination='Titan' />
      </div>
      <div className='header-box'>
        <HeaderBox
          head3={'Europa'}
          // customClass={'heading-3'}
          content={
            'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.'
          }
        />
      </div>
      <div className='line'></div>
      <div className='distance'>
        <Stats subhead2={'Avg. Distance'} figures={'628 mil. km'} />
        <Stats subhead2={'Est. Travel Time'} figures={'3 years'} />
      </div>
    </div>
  );
};
export default Destination;
