interface Props {
  head5: string;
  head1: string;
  content: string;
}

const HeaderBox = ({ head5, head1, content }: Props) => {
  return (
    <article className='col-11 col-lg-6 hero-text'>
      <div className='head5 heading-5 text-uppercase'>{head5}</div>
      <div className='head1 heading-1 text-uppercase'>{head1}</div>
      <p className='content'>{content}</p>
    </article>
  );
};
export default HeaderBox;
