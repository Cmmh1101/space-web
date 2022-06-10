import HeaderBox from '../../components/HeaderBox';
import NumberedNavbar from '../../components/NumberedNavbar';
import SubHeader from '../../components/SubHeader';

const Spaceport = () => {
  return (
    <div className='technology'>
      <div className='col col-lg-6 sub-header '>
        <SubHeader num={'03'} text={'Space launch 101'} />
      </div>
      <div className='technology-body'>
        <div className='image'>
          <img src='../../assets/technology/image-spaceport-landscape.jpg' />
        </div>

        <div className='col col-lg-5 technology-content'>
          <div className='num-navbar'>
            <NumberedNavbar url='/launchVehicle' number={1} />
            <NumberedNavbar url='/spacePort' number={2} />
            <NumberedNavbar url='/spaceCapsule' number={3} />
          </div>

          <div className='col-lg-5 header-box'>
            <HeaderBox
              subhead4='The Terminology...'
              subhead5={'Spaceport'}
              content={
                '  A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage  of the Earth’s rotation for launch.'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Spaceport;
