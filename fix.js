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
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove all occurrences of the imports
  content = content.replace(/import Header from '@\/components\/Header';\r?\n?/g, '');
  content = content.replace(/import Footer from '@\/components\/Footer';\r?\n?/g, '');
  
  // Add them safely after 'use client'; or at top
  if (content.startsWith("'use client';") || content.startsWith('"use client";')) {
    content = content.replace(/^(["']use client["'];\r?\n?)/, "$1import Header from '@/components/Header';\nimport Footer from '@/components/Footer';\n");
  } else {
    content = "import Header from '@/components/Header';\nimport Footer from '@/components/Footer';\n" + content;
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${file}`);
});
