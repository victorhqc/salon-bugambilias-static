import { INIT_IMAGES, NEXT_IMAGE, visibleImagesReducer, initImages, nextImage } from '../reducer';

const dog = { src: '🐶', alt: 'Dog' };
const cat = { src: '🐱', alt: 'Cat' };
const hamster = { src: '🐹', alt: 'Hamster' };
const panda = { src: '🐼', alt: 'Panda' };
const tiger = { src: '🐯', alt: 'Tiger' };

describe('visibleImages actions', () => {
  it('Should init images', () => {
    expect(initImages([dog, cat])).toEqual({
      type: INIT_IMAGES,
      payload: [dog, cat],
    });
  });

  it('Should render next image', () => {
    expect(nextImage()).toEqual({ type: NEXT_IMAGE });
  });
});

describe('visibleImagesReducer', () => {
  const defaultInitialState = {
    images: [dog, cat, hamster, panda, tiger],
    visibleImages: [dog, cat],
  };

  it('Should return default state', () => {
    expect(visibleImagesReducer()).toEqual({
      images: [],
      visibleImages: [],
    });
  });

  it('Should set initial pictures', () => {
    const finalState = [{ type: INIT_IMAGES, payload: [dog, cat, hamster] }].reduce(
      visibleImagesReducer,
      defaultInitialState
    );

    expect(finalState).toEqual({
      images: [dog, cat, hamster],
      visibleImages: [dog, cat],
    });
  });

  describe('Next image', () => {
    it('Should load the next image', () => {
      const finalState = [{ type: NEXT_IMAGE }].reduce(visibleImagesReducer, defaultInitialState);

      expect(finalState).toEqual({
        images: [cat, hamster, panda, tiger, dog],
        visibleImages: [cat, hamster],
      });
    });

    it('Should load next images', () => {
      const finalState = [{ type: NEXT_IMAGE }, { type: NEXT_IMAGE }, { type: NEXT_IMAGE }].reduce(
        visibleImagesReducer,
        defaultInitialState
      );

      expect(finalState).toEqual({
        images: [panda, tiger, dog, cat, hamster],
        visibleImages: [panda, tiger],
      });
    });

    it('Should reset to 1st image when getting to the end of pictures', () => {
      const finalState = [
        { type: NEXT_IMAGE },
        { type: NEXT_IMAGE },
        { type: NEXT_IMAGE },
        { type: NEXT_IMAGE },
        { type: NEXT_IMAGE },
      ].reduce(visibleImagesReducer, defaultInitialState);

      expect(finalState).toEqual(defaultInitialState);
    });
  });
});
