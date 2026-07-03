const fs = require('fs');
let content = fs.readFileSync('src/pages/index.astro', 'utf-8');

// Colors replacement map
const replacements = [
  // Gradients and background blur
  ['#7c3aed', '#2563eb'],
  ['violet-400/5', 'blue-400/5'],
  ['amber-400/5', 'sky-400/5'],
  ['indigo-400/5', 'blue-500/5'],
  ['purple-400/5', 'sky-500/5'],
  
  // Hero
  ['text-violet-600', 'text-blue-600'],
  ['bg-violet-600', 'bg-blue-600'],
  ['hover:bg-violet-500', 'hover:bg-blue-500'],
  ['active:bg-violet-700', 'active:bg-blue-700'],
  ['rgba(124,58,237,0.25)', 'rgba(37,99,235,0.25)'],
  ['rgba(124,58,237,0.45)', 'rgba(37,99,235,0.45)'],
  
  // Agitation
  ['border-violet-200', 'border-blue-200'],
  ['bg-violet-50', 'bg-blue-50'],
  ['rgba(139,92,246,0.05)', 'rgba(59,130,246,0.05)'],
  ['bg-amber-500', 'bg-sky-500'],
  ['via-amber-500/40', 'via-sky-500/40'],
  
  // Solutions & Process
  ['text-amber-600', 'text-sky-600'],
  ['border-violet-500/20', 'border-blue-500/20'],
  ['bg-violet-500/5', 'bg-blue-500/5'],
  ['group-hover:border-violet-500', 'group-hover:border-blue-500'],
  ['border-amber-500/20', 'border-sky-500/20'],
  ['bg-amber-500/5', 'bg-sky-500/5'],
  ['group-hover:border-amber-500', 'group-hover:border-sky-500'],
  
  // Analytics
  ['hover:border-t-violet-500', 'hover:border-t-blue-500'],
  
  // Pricing
  ['hover:bg-violet-50', 'hover:bg-blue-50'],
  ['hover:text-violet-700', 'hover:text-blue-700'],
  ['hover:border-violet-500/40', 'hover:border-blue-500/40'],
  ['active:bg-violet-100', 'active:bg-blue-100'],
  
  ['border-amber-500/30', 'border-sky-500/30'],
  ['rgba(245,158,11,0.1)', 'rgba(14,165,233,0.1)'],
  ['from-violet-600', 'from-blue-600'],
  ['to-amber-500', 'to-sky-500'],
  ['rgba(139,92,246,0.15)', 'rgba(37,99,235,0.15)'],
  ['rgba(245,158,11,0.25)', 'rgba(14,165,233,0.25)'],
  ['hover:bg-amber-600', 'hover:bg-sky-600'],
  ['rgba(245,158,11,0.35)', 'rgba(14,165,233,0.35)'],
  
  // Custom Style
  ['rgba(139, 92, 246, 0.2)', 'rgba(37, 99, 235, 0.2)']
];

for (const [from, to] of replacements) {
  content = content.split(from).join(to);
}

fs.writeFileSync('src/pages/index.astro', content);
console.log('Replaced all violet and amber colors with blue and sky variants in index.astro');
