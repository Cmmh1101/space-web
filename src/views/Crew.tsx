import HeaderBox from '../components/HeaderBox';
import SubHeader from '../components/SubHeader';

const Crew = () => {
  return (
    <div className='crew'>
      <div className='col col-lg-6 sub-header '>
        <SubHeader
          num={'02'}
          text={'Meet your crew'}
          // image={'../../assets/crew/image-douglas-hurley.webp'}
        />
        <img src='../../assets/crew/image-douglas-hurley.webp' alt='' />
      </div>
      <div className='line'></div>
      <div className='header-box'>
        <HeaderBox
          head5='Commander'
          head3={'Douglas Hurley'}
          content={
            ' Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
          }
        />
      </div>
    </div>
  );
};
export default Crew;
