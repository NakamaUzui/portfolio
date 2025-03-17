export const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
};

export const preloadImages = async (images) => {
  try {
    await Promise.all(images.map(src => loadImage(src)));
  } catch (error) {
    console.error('Error preloading images:', error);
  }
}; 