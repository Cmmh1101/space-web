interface Props {
  num: string;
  text: string;
}

const SubHeader = ({ num, text }: Props) => {
  return (
    <>
      <div className='head5 heading-5 text-uppercase'>
        <span>{num}</span> {text}
      </div>
    </>
  );
};
export default SubHeader;
