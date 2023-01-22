import Image from 'next/image';
import Link from 'next/link';

type SlideProps = {
  index: number;
  length: number;
};

export const Slide = ({index, length}: SlideProps) => {
  return (
    <>
      <main className="w-screen">
        <Image
          src={`./slides/slide-${index}.svg`}
          fill
          priority
          alt={`Slide number ${index} of ${length}`}
        />
        {index !== 1 && (
          <Link
            href={`slide-${index - 1}`}
            className="absolute left-0 h-screen w-1/4 opacity-10 duration-300 ease-in-out hover:bg-black"
          />
        )}
        {index !== length && (
          <Link
            href={`slide-${index + 1}`}
            className="absolute right-0 h-screen w-1/4 opacity-10 duration-300 ease-in-out hover:bg-black"
          />
        )}
      </main>
    </>
  );
};
