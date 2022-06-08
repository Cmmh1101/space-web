interface Props {
  head5?: string;
  head1?: string;
  head3?: string;
  content: string;
  customClass?: string;
}

const HeaderBox = ({ head5, head1, content, head3 }: Props) => {
  return (
    <article className='col-11 col-lg-6 header-box'>
      <div className='head5 heading-5 text-uppercase'>{head5}</div>
      <div className='head1 heading-1 text-uppercase '>{head1}</div>
      <div className='head3 heading-3 text-uppercase '>{head3}</div>
      <p className='content'>{content}</p>
    </article>
  );
};

export default HeaderBox;
