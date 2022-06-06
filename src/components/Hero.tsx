import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const Hero = () => {
  return (
    <div className='hero px-5'>
      <div className='row overlay p-10 mx-lg-5'>
        <article className='col-11 col-lg-6 hero-text'>
          <div className='heading-5 text-uppercase'>
            So, you want to travel to
          </div>
          <div className='heading-1 text-uppercase'>space</div>
          <p>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </article>
        <Button className='btn hero-btn text-uppercase mt-5'>
          <Link to='/destination'>Explore</Link>
        </Button>
      </div>
    </div>
  );
};
export default Hero;
