import Image from 'next/image';
import {Routing} from './routing';
import {useRouter} from 'next/router';

type SlideProps = {
  index: number | undefined;
  length: number | undefined;
};

export const Slide = ({index, length}: SlideProps) => {
  const {isFallback} = useRouter();

  if (isFallback || index === undefined || length === undefined) {
    return <></>;
  }

  return (
    <>
      <div className="absolute top-0 h-screen w-screen">
        <Image
          src={`./slides/slide-${index}.svg`}
          fill
          priority
          alt={`Slide number ${index} of ${length}`}
        />
        <Routing side="left" to={index - 1} hide={index === 1} />
        <Routing side="right" to={index + 1} hide={index === length} />
      </div>
    </>
  );
};
