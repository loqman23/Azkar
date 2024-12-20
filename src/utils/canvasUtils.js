import { CONFIG } from '../config.js';

export function getRandomGradient(ctx) {
  const gradients = [
    {
      colors: ['#1e3c72', '#2a5298'],
      type: 'linear'
    },
    {
      colors: ['#000428', '#004e92'],
      type: 'linear'
    },
    {
      colors: ['#0f0c29', '#302b63', '#24243e'],
      type: 'linear'
    },
    {
      colors: ['#23074d', '#cc5333'],
      type: 'radial'
    }
  ];

  const gradient = gradients[Math.floor(Math.random() * gradients.length)];
  
  if (gradient.type === 'linear') {
    const linearGradient = ctx.createLinearGradient(0, 0, 1200, 630);
    gradient.colors.forEach((color, index) => {
      linearGradient.addColorStop(index / (gradient.colors.length - 1), color);
    });
    return linearGradient;
  } else {
    const radialGradient = ctx.createRadialGradient(600, 315, 0, 600, 315, 800);
    gradient.colors.forEach((color, index) => {
      radialGradient.addColorStop(index / (gradient.colors.length - 1), color);
    });
    return radialGradient;
  }
}

export function drawIslamicPattern(ctx) {
  ctx.save();
  
  const corners = [
    [50, 50],
    [1150, 50],
    [50, 580],
    [1150, 580]
  ];

  corners.forEach(([x, y]) => {
    ctx.save();
    ctx.translate(x, y);
    drawCornerPattern(ctx);
    ctx.restore();
  });

  ctx.restore();
}

function drawCornerPattern(ctx) {
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = 2;

  for (let i = 0; i < 8; i++) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(40, 0);
    ctx.stroke();
    ctx.rotate(Math.PI / 4);
  }

  ctx.beginPath();
  ctx.arc(0, 0, 30, 0, Math.PI * 2);
  ctx.stroke();
}