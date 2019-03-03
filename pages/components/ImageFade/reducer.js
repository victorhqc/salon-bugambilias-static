export const NEXT_IMAGE = 'visibleImages/next';

export const nextImage = () => ({
  type: NEXT_IMAGE,
});

export const getDefaultState = images => ({
  images,
  visibleImages: getVisibleImages(images),
});

export function visibleImagesReducer(state = getDefaultState([]), action = {}) {
  switch (action.type) {
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
