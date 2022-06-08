interface Props {
  num: string;
  text: string;
  image?: string;
  height?: any;
}

const SubHeader = ({ num, text }: Props) => {
  return (
    <div className='subHeader'>
      <div className='head5 heading-5 text-uppercase'>
        <span>{num}</span> {text}
      </div>
    </div>
  );
};
export default SubHeader;
