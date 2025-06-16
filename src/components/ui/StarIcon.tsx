import Image, { ImageProps } from 'next/image';

export const StarIcon = (
  props: Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'>,
) => (
  <Image
    src='/assets/images/star.svg'
    alt='Star'
    width={26}
    height={26}
    className='h-6 w-6'
    {...props}
  />
);
