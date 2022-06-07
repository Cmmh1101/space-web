interface Props {
  subhead2: string;
  figures: string;
}

const Stats = ({ subhead2, figures }: Props) => {
  return (
    <div className='stats '>
      <div className='subheading-2 text-uppercase'>{subhead2}</div>
      <div className='heading-1 text-uppercase'>{figures}</div>
    </div>
  );
};
export default Stats;
