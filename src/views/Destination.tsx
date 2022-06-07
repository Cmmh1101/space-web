import SecondaryNavbar from '../components/SecondaryNavbar';
import SubHeader from '../components/SubHeader';

const Destination = () => {
  return (
    <div className='destination'>
      <SubHeader num={'01'} text={'Pick your destination'} />
      <div className='secondary-navbar'>
        <SecondaryNavbar url='/moon' destination='Moon' />
        <SecondaryNavbar url='/mars' destination='Mars' />
        <SecondaryNavbar url='/europa' destination='Europa' />
        <SecondaryNavbar url='/titan' destination='Titan' />
      </div>
    </div>
  );
};
export default Destination;
