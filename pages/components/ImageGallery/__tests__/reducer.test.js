import {
  PREVIOUS_IMAGE,
  NEXT_IMAGE,
  imageGalleryReducer,
  nextImage,
  previousImage,
  getDefaultState,
} from '../reducer';

const dog = { src: '🐶', alt: 'Dog' };
const cat = { src: '🐱', alt: 'Cat' };
const hamster = { src: '🐹', alt: 'Hamster' };
const panda = { src: '🐼', alt: 'Panda' };
const tiger = { src: '🐯', alt: 'Tiger' };

describe('visibleImages actions', () => {
  it('Should render next image', () => {
    expect(nextImage()).toEqual({ type: NEXT_IMAGE });
  });

  it('Shouls render previous image', () => {
    expect(previousImage()).toEqual({ type: PREVIOUS_IMAGE });
  });
});

describe('imageGalleryReducer', () => {
  const defaultInitialState = {
    images: [dog, cat, hamster, panda, tiger],
  };

  it('Should return default state', () => {
    expect(imageGalleryReducer()).toEqual({
      images: [],
    });
  });

  it('Should return initial state', () => {
    const initialState = getDefaultState([dog, cat, hamster]);

    expect(imageGalleryReducer(initialState)).toEqual({
      images: [dog, cat, hamster],
    });
  });

  it('Should load the next image', () => {
    const finalState = [nextImage()].reduce(imageGalleryReducer, defaultInitialState);

    expect(finalState).toEqual({
      images: [cat, hamster, panda, tiger, dog],
    });
  });

  it('Should load next images', () => {
    const finalState = [nextImage(), nextImage(), nextImage()].reduce(
      imageGalleryReducer,
      defaultInitialState
    );

    expect(finalState).toEqual({
      images: [panda, tiger, dog, cat, hamster],
    });
  });

  it('Should reset to 1st image when getting to the end of pictures', () => {
    const finalState = [nextImage(), nextImage(), nextImage(), nextImage(), nextImage()].reduce(
      imageGalleryReducer,
      defaultInitialState
    );

    expect(finalState).toEqual(defaultInitialState);
  });

  it('Should load the previous image', () => {
    const finalState = [previousImage()].reduce(imageGalleryReducer, defaultInitialState);

    expect(finalState).toEqual({
      images: [tiger, dog, cat, hamster, panda],
    });
  });

  it('Should load previous images', () => {
    const finalState = [previousImage(), previousImage(), previousImage()].reduce(
      imageGalleryReducer,
      defaultInitialState
    );

    expect(finalState).toEqual({
      images: [hamster, panda, tiger, dog, cat],
    });
  });

  it('Should reset to 1st image when getting at the end of pictures (previous)', () => {
    const finalState = [
      previousImage(),
      previousImage(),
      previousImage(),
      previousImage(),
      previousImage(),
    ].reduce(imageGalleryReducer, defaultInitialState);

    expect(finalState).toEqual(defaultInitialState);
  });

  it('Should load next/previous images', () => {
    const finalState = [nextImage(), previousImage(), previousImage(), nextImage()].reduce(
      imageGalleryReducer,
      defaultInitialState
    );

    expect(finalState).toEqual(defaultInitialState);
  });
});
