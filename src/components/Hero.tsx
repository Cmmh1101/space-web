import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import HeaderBox from './HeaderBox';

const Hero = () => {
  return (
    <div className='hero px-5'>
      <div className='row overlay p-10 mx-lg-5'>
        <HeaderBox
          head5='So, you want to travel to'
          head1='space'
          content="Let's face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we'll give you a truly out of this world
        experience!"
        />

        <Button className='btn hero-btn text-uppercase mt-5'>
          <Link to='/destination'>Explore</Link>
        </Button>
      </div>
    </div>
  );
};
export default Hero;
