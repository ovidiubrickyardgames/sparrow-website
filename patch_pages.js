const fs = require('fs');
const glob = require('glob'); // Not available by default, I'll use simple recursive readdir

const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('src/pages', (filePath) => {
  if (!filePath.endsWith('.astro')) return;
  if (filePath === 'src/pages/index.astro') return; // already done

  let content = fs.readFileSync(filePath, 'utf-8');

  // Replace standard getStaticPaths for static pages
  content = content.replace(/export function getStaticPaths\(\) \{[\s\S]*?return Object\.keys\(languages\)[\s\S]*?\}\n/g, '');
  content = content.replace(/import \{ languages \} from '@utils\/ui';\n/g, '');

  // Remove currentLocale assignments
  content = content.replace(/const \{ lang \} = Astro\.params;\n/g, '');
  content = content.replace(/const currentLocale = lang \|\| 'en';\n/g, '');

  // Replace useTranslations calls
  content = content.replace(/useTranslations\(currentLocale\)/g, 'useTranslations()');
  
  // Remove lang prop from MainLayout
  content = content.replace(/<MainLayout[^>]*lang=\{currentLocale\}[^>]*>/g, (match) => {
    return match.replace(/\s*lang=\{currentLocale\}/, '');
  });

  // Replace `currentLocale === 'en' ? 'team' : 'equipe'` in about.astro
  content = content.replace(/const teamId = currentLocale === 'en' \? 'team' : 'equipe';/g, "const teamId = 'team';");

  // Replace `currentLocale === 'en'` logic in other places
  content = content.replace(/currentLocale === 'en' \? '' : `\/\$\{currentLocale\}`/g, "''");
  content = content.replace(/currentLocale === 'en' \? 'en-US' : currentLocale/g, "'en-US'");

  // Fix dynamic pages getStaticPaths
  if (filePath.includes('[id].astro')) {
    content = content.replace(/const lang = parts\[0\] === 'en' \? undefined : parts\[0\];\n\s*const id = parts\.slice\(1\)\.join\('\/'\)\.replace\(\/\\\\.\[\^\/\.\]\+\$\/, ''\); \/\/ Remove prefix and extension\n\s*return \{\n\s*params: \{ lang, id \}/g, 
      "const id = parts[0] === 'en' ? parts.slice(1).join('/').replace(/\\\\.[^.]+$/, '') : parts.join('/').replace(/\\\\.[^.]+$/, '');\n    return {\n      params: { id }"
    );
    // Replace `id.startsWith(\`${currentLocale}/\`)` with `id.startsWith('en/')`
    content = content.replace(/id\.startsWith\(`\$\{currentLocale\}\/`\)/g, "id.startsWith('en/')");
    // Replace recentBlogLocale={currentLocale}
    content = content.replace(/recentBlogLocale=\{currentLocale\}/g, "");
  }

  fs.writeFileSync(filePath, content, 'utf-8');
});

console.log('Done patching pages');
