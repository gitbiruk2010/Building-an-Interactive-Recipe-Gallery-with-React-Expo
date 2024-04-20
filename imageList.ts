// Explicitly require each image from your local assets folder
const image1 = require('./assets/burger.png');
const image2 = require('./assets/taco.png');
const image3 = require('./assets/pancake.png');
const image4 = require('./assets/salad.png');
const image5 = require('./assets/pasta.png');
const image6 = require('./assets/cabab.png');
// more images

// List of images using local references
export const images = [
  { id: 1, url: image1, description: 'Classic Cheese Burger' },
  { id: 2, url: image2, description: 'Taco' },
  { id: 3, url: image3, description: 'Strawberry Pancake' },
  { id: 4, url: image4, description: 'Fried Fruit Salad' },
  { id: 5, url: image5, description: 'Marinara Spaghetti' },
  { id: 6, url: image6, description: 'Shis Kebab' },
];
