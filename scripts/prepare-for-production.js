#!/usr/bin/env node

/**
 * Script to prepare the codebase for production/sale
 * Removes development code and cleans up the project
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Preparing project for production...\n');

// Files to clean console.log from
const filesToClean = [
  'src/components/settings/OptimizedThemeControls.jsx',
  'src/examples/comprehensive-types.js'
];

// Clean console.log statements
filesToClean.forEach(file => {
  const filePath = path.join(path.dirname(__dirname), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove console.log lines
    content = content.replace(/^\s*console\.log\(.*\);\s*$/gm, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Cleaned console.log from: ${file}`);
  }
});

// Move ThemeExport.jsx to components
const oldPath = path.join(path.dirname(__dirname), 'src/pages/ThemeExport.jsx');
const newPath = path.join(path.dirname(__dirname), 'src/components/ThemeExport.jsx');

if (fs.existsSync(oldPath)) {
  fs.renameSync(oldPath, newPath);
  console.log('✅ Moved ThemeExport.jsx to components folder');
  
  // Update import in App.jsx
  const appPath = path.join(path.dirname(__dirname), 'src/App.jsx');
  let appContent = fs.readFileSync(appPath, 'utf8');
  appContent = appContent.replace(
    "import ThemeExport from '@/pages/ThemeExport.jsx'",
    "import ThemeExport from '@/components/ThemeExport.jsx'"
  );
  fs.writeFileSync(appPath, appContent);
  console.log('✅ Updated import in App.jsx');
  
  // Remove empty pages directory
  const pagesDir = path.join(path.dirname(__dirname), 'src/pages');
  if (fs.existsSync(pagesDir) && fs.readdirSync(pagesDir).length === 0) {
    fs.rmdirSync(pagesDir);
    console.log('✅ Removed empty pages directory');
  }
}

// Check for unused files
const unusedLayouts = ['src/layouts/AuthLayout.jsx', 'src/layouts/MainLayout.jsx'];
console.log('\n⚠️  Found unused layout files:');
unusedLayouts.forEach(file => {
  const filePath = path.join(path.dirname(__dirname), file);
  if (fs.existsSync(filePath)) {
    console.log(`   - ${file} (consider removing or implementing)`);
  }
});

console.log('\n✨ Production preparation complete!');
console.log('\nNext steps:');
console.log('1. Review and remove unused layout files if not needed');
console.log('2. Run pnpm build to verify everything works');
console.log('3. Create a clean ZIP file for distribution');