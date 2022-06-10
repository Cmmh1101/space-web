import HeaderBox from '../components/HeaderBox';
import SubHeader from '../components/SubHeader';
import NumberedNavbar from '../components/NumberedNavbar';

const Technology = () => {
  return (
    <div className='technology'>
      <div className='col col-lg-6 sub-header '>
        <SubHeader num={'03'} text={'Space launch 101'} />
      </div>
      <div className='technology-body'>
        <div className='image'>
          <img
            className='tec-image-1'
            src='../../assets/technology/image-launch-vehicle-landscape.jpg'
          />
          <img
            className='tec-image-2'
            src='../../assets/technology/image-launch-vehicle-portrait.jpg'
          />
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
              subhead5={'Launch Vehicle'}
              content={
                "  A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Technology;
