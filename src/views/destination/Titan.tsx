import HeaderBox from '../../components/HeaderBox';
import SecondaryNavbar from '../../components/SecondaryNavbar';
import SubHeader from '../../components/SubHeader';
import Stats from '../../components/Stats';

const Titan = () => {
  return (
    <div className='destination'>
      <div className='col col-lg-6 sub-header'>
        <SubHeader num={'01'} text={'Pick your destination'} />
        <div className='image'>
          <img src='../../assets/destination/image-titan.png' />
        </div>
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
            head3={'Titan'}
            // customClass={'heading-3'}
            content={
              'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.'
            }
          />
        </div>
        <div className='line'></div>
        <div className='distance'>
          <Stats subhead2={'Avg. Distance'} figures={'1.6 bil. km'} />
          <Stats subhead2={'Est. Travel Time'} figures={'7 years'} />
        </div>
      </div>
    </div>
  );
};
export default Titan;
