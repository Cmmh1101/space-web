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
          image={'../../assets/destination/image-titan.png'}
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
          head3={'Titan'}
          // customClass={'heading-3'}
          content={
            'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.'
          }
        />
      </div>
      <div className='line'></div>
      <Stats subhead2={'Avg. Distance'} figures={'1.6 bil. km'} />
      <Stats subhead2={'Est. Travel Time'} figures={'7 years'} />
    </div>
  );
};
export default Destination;
