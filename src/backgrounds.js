const backgrounds = [
  'assets/bg1.jpg',
  'assets/bg2.jpg',
  'assets/bg3.jpg',
  'assets/bg4.jpg',
  'assets/bg5.jpg'
];

export function getRandomBackground() {
  return backgrounds[Math.floor(Math.random() * backgrounds.length)];
}

// © All rights reserved to Loqmanas (L.Q1).  