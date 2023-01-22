import {type NextPage} from 'next';
import {Slide} from '../components/slide';

const Home: NextPage = () => {
  return (
    <>
      <Slide index={1} length={2}></Slide>
    </>
  );
};

export default Home;
