import Image, { ImageProps } from 'next/image';

export const StarIcon = ({
  width = 26,
  height = 26,
  ...props
}: Omit<ImageProps, 'src' | 'alt'>) => (
  <Image
    src='/assets/images/star.svg'
    alt='Star'
    width={width}
    height={height}
    className={`h-${height === 26 ? '6' : `[${height}px]`} w-${width === 26 ? '6' : `[${width}px]`}`}
    {...props}
  />
);
