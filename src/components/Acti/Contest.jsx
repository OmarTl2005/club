import Activity from '../Activity';
import blog from '../../data/activities/3ptContest';

const Contest = () => {
  return (
    <Activity blog={blog[0]} />
  );
};

export default Contest;