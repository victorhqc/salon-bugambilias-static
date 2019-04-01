export const NEXT_IMAGE = 'imageGallery/next';
export const PREVIOUS_IMAGE = 'imageGallery/previous';

export const nextImage = () => ({
  type: NEXT_IMAGE,
});

export const previousImage = () => ({
  type: PREVIOUS_IMAGE,
});

export const getDefaultState = images => ({
  images,
  direction: 'none',
});

export function imageGalleryReducer(state = getDefaultState([]), action = {}) {
  switch (action.type) {
    case NEXT_IMAGE:
      return {
        images: calculateNextImages(state.images),
        direction: 'next',
      };
    case PREVIOUS_IMAGE:
      return {
        images: calculatePreviousImages(state.images),
        direction: 'previous',
      };
    default:
      return state;
  }
}

function calculateNextImages(images) {
  return [...images.slice(1), images[0]];
}

function calculatePreviousImages(images) {
  return [images[images.length - 1], ...images.slice(0, images.length - 1)];
}
