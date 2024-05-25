// Define a default image URL
export const DEFAULT_IMAGE_URL = 'https://shorturl.at/FhPie';

// Utility function to check if an image URL is valid
export const isValidImageUrl = async (imageUrl) => {
  try {
    const response = await fetch(imageUrl, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error('Error checking image URL:', error);
    return false;
  }
};

// Utility function to render an image with fallback to default image
export const renderImageWithFallback = async (imageUrl) => {
  if (await isValidImageUrl(imageUrl)) {
    return imageUrl;
  } else {
    console.warn('Invalid image URL, using default image:', imageUrl);
    return DEFAULT_IMAGE_URL;
  }
};