import React, { useReducer, useEffect } from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import { visibleImagesReducer, getDefaultState, nextImage } from './reducer';

const DesktopImageFader = () => {
  const [state, dispatch] = useReducer(visibleImagesReducer, getDefaultState(images));
  const transitions = useTransition(state.visibleImages[0], item => item.src, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 2000,
    },
  });

  useEffect(() => {
    const interval = () => {
      dispatch(nextImage());
    };

    setInterval(interval, 8000);

    return () => {
      return clearInterval(interval);
    };
  }, []);

  return (
    <Wrapper data-testid="image-fader">
      {transitions.map(({ item, props, key }) => (
        <Img src={item.src} key={key} style={{ ...props }} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 60vh;
  position: relative;
  display: block;
`;

const Img = styled(animated.img)`
  position: absolute;
  display: block;
  object-fit: cover;
  width: 100%;
  height: 60vh;
  z-index: 0;
  top: 0;
  left: 0;

  will-change: opacity;
`;

const images = [
  {
    src: '/static/vista_de_mesa.jpg',
    alt: 'Mesa redonda para 10 personas, con bonito centro de mesa.',
  },
  {
    src: '/static/centro_de_mesa.jpg',
    alt: 'Mesa redonda para 10 personas, con bonito centro de mesa.',
  },
  {
    src: '/static/mesa_de_dulces.jpg',
    alt: 'Mesa con dulces y bocadillos para los invitados.',
  },
  {
    src: '/static/vista_salon.jpg',
    alt:
      'Mesas listas para comenzar la fiesta. Al fondo puede verse la mesa con dulces y la mesa de buffet.',
  },
  {
    src: '/static/mesa_de_buffet.jpg',
    alt: 'La mesa con buffet ofrece diferentes opciones de comida para los invitados.',
  },
];

export default DesktopImageFader;
