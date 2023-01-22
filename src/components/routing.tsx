import Link from 'next/link';

type RoutingProps = {
  to: number;
  side: 'right' | 'left';
  hide: boolean;
};

export const Routing = ({to, side, hide}: RoutingProps) => {
  const sideClass = side === 'right' ? 'right-0' : 'left-0';
  if (hide) {
    return <></>;
  }

  return (
    <Link
      href={`slide-${to}`}
      className={`absolute ${sideClass} h-screen w-1/4 opacity-10 duration-100 ease-in-out md:hover:bg-black`}
    />
  );
};
