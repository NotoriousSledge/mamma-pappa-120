import {readdir} from 'fs/promises';
import type {GetStaticProps, InferGetStaticPropsType} from 'next';
import {join} from 'path';
import {Slide} from '../components/slide';

const Page = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Slide {...props}></Slide>
    </>
  );
};

export default Page;

export const getStaticProps: GetStaticProps<{
  index: number;
  length: number;
}> = async (context) => {
  const slideParam = context.params?.['slide'] as string;
  const index = parseInt(slideParam.split('-').pop() ?? '1', 10);
  const slidesDir = join(process.cwd(), 'public', 'slides');
  const length = await readdir(slidesDir).then((files) => files.length);

  return {
    props: {
      index,
      length,
    },
  };
};

export async function getStaticPaths() {
  const slidesDir = join(process.cwd(), 'public', 'slides');
  const length = await readdir(slidesDir).then((files) => files.length);
  return {
    paths: Array.from({length}, (_, index) => ({
      params: {slide: `${index + 1}`},
    })),
    fallback: false, // can also be true or 'blocking'
  };
}
