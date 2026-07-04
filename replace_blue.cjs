const fs = require('fs');
const outboundPath = './src/pages/outbound.astro';
let content = fs.readFileSync(outboundPath, 'utf8');

// Replacements in outbound.astro
content = content.replace(/bg-blue-400\/5/g, 'bg-zinc-900/5');
content = content.replace(/text-blue-600/g, 'text-zinc-900');
content = content.replace(/bg-blue-600 hover:bg-blue-500 active:bg-blue-700/g, 'bg-zinc-900 hover:bg-zinc-800 active:bg-black');
content = content.replace(/rgba\(37,99,235,/g, 'rgba(0,0,0,');
content = content.replace(/border-blue-200 bg-blue-50 shadow-\[0_0_20px_rgba\(59,130,246,0\.05\)\]/g, 'border-zinc-200 bg-zinc-50 shadow-[0_0_20px_rgba(0,0,0,0.05)]');
content = content.replace(/from-blue-500\/10 via-sky-500\/10 to-blue-500\/10/g, 'from-zinc-900/10 via-zinc-500/10 to-zinc-900/10');
content = content.replace(/hover:bg-blue-50 hover:text-blue-700 hover:border-blue-500\/40 active:bg-blue-100/g, 'hover:bg-zinc-100 hover:text-zinc-900 hover:border-zinc-500/40 active:bg-zinc-200');
content = content.replace(/from-blue-600 to-sky-500/g, 'from-zinc-900 to-zinc-600');
content = content.replace(/rgba\(59,130,246,/g, 'rgba(0,0,0,');

fs.writeFileSync(outboundPath, content);
console.log('Replaced blue with black in outbound.astro');

const globalCssPath = './src/assets/styles/global.css';
let cssContent = fs.readFileSync(globalCssPath, 'utf8');

cssContent = cssContent.replace(/--color-brand-accent-1: #1a3faa;/g, '--color-brand-accent-1: #0a0a0a;');
cssContent = cssContent.replace(/--color-brand-accent-2: #8ba1b7;/g, '--color-brand-accent-2: #52525b;');
cssContent = cssContent.replace(/!text-blue-600/g, '!text-zinc-900');

fs.writeFileSync(globalCssPath, cssContent);
console.log('Replaced blue with black in global.css');
