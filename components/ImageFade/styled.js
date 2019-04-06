import styled from 'styled-components';
import { animated } from 'react-spring';

export const Wrapper = styled.div`
  height: ${props => (props.mobile ? '45vh' : '60vh')};
  position: relative;
  display: block;
`;

export const Img = styled(animated.img)`
  position: absolute;
  display: block;
  object-fit: cover;
  width: 100%;
  height: ${props => (props.mobile ? '45vh' : '60vh')};
  z-index: 0;
  top: 0;
  left: 0;
  visibility: ${props => (props.invisible ? 'hidden' : 'visible')};

  will-change: opacity;
`;
