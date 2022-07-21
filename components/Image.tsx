import React from 'react';

export interface ImageProps {
  imgComponent?: React.ElementType;
  webPSrc?: string;
  imgSrc: string;
  alt: string;
  width?: string | number;
}

export const Image: React.FC<ImageProps> = (props: ImageProps) => {
  return (
    <picture
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {props.webPSrc && <source srcSet={props.webPSrc} type='image/webp' />}
      {props.imgComponent ? (
        <props.imgComponent
          src={props.imgSrc}
          alt={props.alt}
          decoding='async'
          loading='lazy'
          width={props.width}
        />
      ) : (
        <img src={props.imgSrc} alt={props.alt} decoding='async' loading='lazy' />
      )}
    </picture>
  );
};
