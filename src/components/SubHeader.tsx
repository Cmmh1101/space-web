interface Props {
  num: string;
  text: string;
  image: string;
}

const SubHeader = ({ num, text, image }: Props) => {
  return (
    <div className='subHeader'>
      <div className='head5 heading-5 text-uppercase'>
        <span>{num}</span> {text}
      </div>
      <div className='planet'>
        <img src={image}></img>
      </div>
    </div>
  );
};
export default SubHeader;
