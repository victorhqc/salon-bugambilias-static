export const NEXT_IMAGE = 'visibleImages/next';
export const INIT_IMAGES = 'visibleImages/init';

export const initImages = images => ({
  type: INIT_IMAGES,
  payload: images,
});

export const nextImage = () => ({
  type: NEXT_IMAGE,
});

const defaultState = {
  images: [],
  visibleImages: [],
};

export function visibleImagesReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case INIT_IMAGES:
      return {
        images: action.payload,
        visibleImages: getVisibleImages(action.payload),
      };
    case NEXT_IMAGE:
      const newImages = calculateNextImages(state.images);
      return {
        images: newImages,
        visibleImages: getVisibleImages(newImages),
      };
    default:
      return state;
  }
}

function calculateNextImages(images) {
  return [...images.slice(1), images[0]];
}

function getVisibleImages(images) {
  if (!images || images.length <= 2) {
    console.warn('To render visible images, please add at least 3 images');
    return [];
  }

  return [images[0], images[1]];
}
