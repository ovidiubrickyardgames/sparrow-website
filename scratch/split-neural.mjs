import fs from 'fs';

const astroContent = fs.readFileSync(
  'src/components/ui/NeuralNetwork.astro',
  'utf8'
);

const scriptMatch = astroContent.match(/<script>\s*([\s\S]*?)<\/script>/);
if (!scriptMatch) throw new Error('No script tag found');

const scriptContent = scriptMatch[1];

// Make NeuralNetworkApp.ts content
let tsContent = scriptContent.replace(
  /document\.addEventListener\('astro:page-load',.*?\n\s*}\);\s*$/m,
  ''
);
tsContent = tsContent.replace(/const initNeuralNetworks =.*?\n\s*};\s*$/ms, '');
tsContent = tsContent.replace(
  /export class NeuralNetwork/g,
  'class NeuralNetwork'
);
tsContent = tsContent.replace(
  /class NeuralNetwork/,
  'export class NeuralNetwork'
);
// Change .png to .webp
tsContent = tsContent.replace(/\.png/g, '.webp');

fs.writeFileSync('src/scripts/NeuralNetworkApp.ts', tsContent.trim() + '\n');

// Replace script in astro file
const newAstroContent = astroContent.replace(
  scriptMatch[0],
  `<script>
  const loadNeuralNetwork = () => {
    const canvas = document.getElementById('neural-canvas') as HTMLCanvasElement;
    if (!canvas || canvas.dataset.initialized === 'true') return;

    const init = async () => {
      canvas.dataset.initialized = 'true';
      try {
        const { NeuralNetwork } = await import('@scripts/NeuralNetworkApp');
        new NeuralNetwork(canvas);
      } catch (err) {
        console.error('Failed to load 3D Neural Network', err);
      }
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(init);
    } else {
      setTimeout(init, 500);
    }
  };

  // Handle Astro page transitions
  document.addEventListener('astro:page-load', loadNeuralNetwork);
</script>`
);

fs.writeFileSync('src/components/ui/NeuralNetwork.astro', newAstroContent);
console.log('Split successful!');
