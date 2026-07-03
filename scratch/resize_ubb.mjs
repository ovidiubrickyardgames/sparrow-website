import sharp from 'sharp';
import fs from 'fs';

async function resize() {
  const input = 'public/images/partners/ubb.webp';
  const output = 'public/images/partners/ubb_small.webp';
  await sharp(input).resize(200).toFile(output);
  fs.renameSync(output, input);
  console.log('Resized ubb.webp');
}

resize();
