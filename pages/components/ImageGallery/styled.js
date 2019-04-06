import styled from 'styled-components';
import { animated } from 'react-spring';
import nextIcon from '../../../images/icons/next.svg';

export const Wrapper = styled.div`
  position: relative;
  height: ${props => props.height || '300px'};
  overflow: hidden;
  box-shadow: 0 5px 8px -6px #454545;
`;

const GalleryButton = styled.button`
  position: absolute;
  width: 15%;
  height: 100%;
  top: 0;
  z-index: 1;
  cursor: pointer;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  background-image: url(${nextIcon});
  background-size: cover;
  width: 50px;
  height: 50px;
`;

export const BackwardWrapper = styled(GalleryButton)`
  left: 0;
`;

export const BackwardIcon = styled(Icon)`
  transform: rotate(180deg);
`;

export const ForwardWrapper = styled(GalleryButton)`
  right: 0;
`;

export const ForwardIcon = styled(Icon)``;

export const Img = styled(animated.img)`
  position: absolute;
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: 0;
  top: 0;
  left: 0;
  text-shadow: 0px 2px 40px #00000020, 0px 2px 5px #00000030;
  visibility: ${props => (props.invisible ? 'hidden' : 'visible')};

  will-change: transform, opacity;
`;
