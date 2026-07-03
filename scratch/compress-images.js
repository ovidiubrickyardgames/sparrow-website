import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = './public/images/neural-network/';
const outputDir = './public/images/neural-network/opt/';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(file => {
  if (file.endsWith('.png') && !file.startsWith('.')) {
    sharp(path.join(inputDir, file))
      .resize(800) // max width 800px is enough for 3D cards
      .webp({ quality: 80 }) // convert to webp for better compression
      .toFile(path.join(outputDir, file.replace('.png', '.webp')))
      .then(info => console.log(`Compressed ${file}: ${info.size} bytes`))
      .catch(err => console.error(`Error compressing ${file}:`, err));
  }
});
