import Image from 'next/image';
import {Routing} from './routing';

type SlideProps = {
  index: number | undefined;
  length: number;
};

export const Slide = ({index, length}: SlideProps) => {
  if (index === undefined) {
    return <></>;
  }

  return (
    <>
      <main className="absolute top-0 h-screen w-screen">
        <Image
          src={`./slides/slide-${index}.svg`}
          fill
          priority
          alt={`Slide number ${index} of ${length}`}
        />
        <Routing side="left" to={index - 1} hide={index === 1} />
        <Routing side="right" to={index + 1} hide={index === length} />
      </main>
    </>
  );
};
