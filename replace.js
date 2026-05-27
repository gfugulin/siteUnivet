const fs = require('fs');
const path = require('path');

const files = [
  'src/app/dental/page.tsx',
  'src/app/medical/page.tsx',
  'src/app/lupas/page.tsx',
  'src/app/fotoforos/page.tsx',
  'src/app/acessorios/page.tsx',
  'src/app/magnificacoes/page.tsx',
  'src/app/blog/page.tsx',
  'src/app/professores/page.tsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${file}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace Header
  content = content.replace(/<header[\s\S]*?<\/header>/, '<Header />');
  
  // Replace Footer
  content = content.replace(/<footer[\s\S]*?<\/footer>/, '<Footer />');
  
  // Add imports if not present
  if (!content.includes('import Header')) {
    // Inject right after the first line (usually 'use client' or import)
    const lines = content.split('\n');
    let insertIdx = 0;
    while (lines[insertIdx].startsWith('import') || lines[insertIdx].startsWith("'use client'") || lines[insertIdx].startsWith('"use client"')) {
      insertIdx++;
    }
    lines.splice(insertIdx, 0, "import Header from '@/components/Header';\nimport Footer from '@/components/Footer';");
    content = lines.join('\n');
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
});
