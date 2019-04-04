// TODO: Fix this 💩
// Just to ease out the development. I'm using a nasty workaround to load the pictures.
// This should totally be discarded by a better implementation. I'm just being lazy.
const KNOWN_GALLERIES = {
  kids_party: {
    picturesLength: 15,
  },
  wedding: {
    picturesLength: 13,
  },
};

export function loadGalleryImages(galleryName, type) {
  explodeWithUnknown(galleryName);

  const picturesLength = KNOWN_GALLERIES[galleryName].picturesLength;
  return [...Array(picturesLength).keys()]
    .map(index => {
      return require(`../../../images/${galleryName}/${type}/${galleryName}_${index + 1}.jpg`);
    })
    .map(src => ({
      src,
      alt: src,
    }));
}

function explodeWithUnknown(galleryName) {
  if (!KNOWN_GALLERIES[galleryName]) {
    throw new Error(`
Unknown gallery: ${galleryName}, there's either a typo or this gallery is not known.
    `);
  }
}
