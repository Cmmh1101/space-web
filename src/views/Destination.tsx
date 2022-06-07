import SecondaryNavbar from '../components/SecondaryNavbar';

const Destination = () => {
  return (
    <div className='destination'>
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
