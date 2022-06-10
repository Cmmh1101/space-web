import HeaderBox from '../../components/HeaderBox';
import NumberedNavbar from '../../components/NumberedNavbar';
import SubHeader from '../../components/SubHeader';

const SpaceCapsule = () => {
  return (
    <div className='technology'>
      <div className='col col-lg-6 sub-header '>
        <SubHeader num={'03'} text={'Space launch 101'} />
      </div>
      <div className='technology-body'>
        <div className='image'>
          <img src='../../assets/technology/image-space-capsule-landscape.jpg' />
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
              subhead5={'Space Capsule'}
              content={
                "  A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where  you'll spend your time during the flight. It includes a space gym, cinema,  and plenty of other activities to keep you entertained."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SpaceCapsule;
