import Activity from '../Activity';
import blog from '../../data/activities/football';

const Football = () => {
  return (
    <Activity blog={blog[0]} />
  );
};

export default Football;