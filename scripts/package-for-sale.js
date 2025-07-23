#!/usr/bin/env node

/**
 * Script to package the project for sale
 * Creates a clean distribution package
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.dirname(__dirname);

console.log('📦 Packaging React Theme System Kit for distribution...\n');

// Create temp directory for packaging
const tempDir = path.join(projectRoot, 'temp-package');
const outputDir = path.join(projectRoot, 'distribution');

// Clean up any existing directories
if (fs.existsSync(tempDir)) {
  fs.rmSync(tempDir, { recursive: true });
}
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Create temp directory
fs.mkdirSync(tempDir);

// Files and directories to include
const includeList = [
  'src',
  'public',
  'docs',
  'scripts',
  'package.json',
  'pnpm-lock.yaml',
  'vite.config.js',
  'jsconfig.json',
  'components.json',
  'eslint.config.js',
  'index.html',
  'postcss.config.js',
  'tailwind.config.js',
  'types.d.ts',
  'vercel.json',
  'LICENSE',
  'README.md',
  'THEME-CUSTOMIZATION-GUIDE.md',
  'THEME-EXPORT-GUIDE.md',
  'TYPESCRIPT.md',
  'COMPONENTS.md',
  'REACT-19-COMPREHENSIVE-GUIDE.md'
];

// Copy files
console.log('📋 Copying files...');
includeList.forEach(item => {
  const srcPath = path.join(projectRoot, item);
  const destPath = path.join(tempDir, item);
  
  if (fs.existsSync(srcPath)) {
    if (fs.statSync(srcPath).isDirectory()) {
      copyDirectorySync(srcPath, destPath);
    } else {
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      fs.copyFileSync(srcPath, destPath);
    }
    console.log(`   ✅ ${item}`);
  }
});

// Create .gitignore for the package
const gitignoreContent = `# Dependencies
node_modules
.pnpm-store

# Build output
dist
build

# Environment files
.env
.env.local
.env.*.local

# IDE
.vscode
.idea

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
pnpm-debug.log*
`;

fs.writeFileSync(path.join(tempDir, '.gitignore'), gitignoreContent);
console.log('   ✅ .gitignore');

// Create installation instructions
const installInstructions = `# Installation Instructions

## Quick Start

1. **Install dependencies:**
   \`\`\`bash
   pnpm install
   # or
   npm install
   \`\`\`

2. **Start development server:**
   \`\`\`bash
   pnpm dev
   # or
   npm run dev
   \`\`\`

3. **Build for production:**
   \`\`\`bash
   pnpm build
   # or
   npm run build
   \`\`\`

## Live Demo
View the live demo at: https://react-theme-kit.vercel.app/

## Documentation
- README.md - Getting started guide
- THEME-CUSTOMIZATION-GUIDE.md - How to customize themes
- THEME-EXPORT-GUIDE.md - Export/import themes
- TYPESCRIPT.md - TypeScript usage
- COMPONENTS.md - Component documentation

## Support
For support, please refer to the documentation or contact the seller.

Thank you for purchasing React Theme System Kit!
`;

fs.writeFileSync(path.join(tempDir, 'INSTALLATION.md'), installInstructions);
console.log('   ✅ INSTALLATION.md');

// Create ZIP file
const zipFileName = `react-theme-system-kit-v1.0.0.zip`;
const zipPath = path.join(outputDir, zipFileName);

console.log('\n📦 Creating ZIP file...');
process.chdir(tempDir);
execSync(`zip -r "${zipPath}" .`, { stdio: 'inherit' });

// Clean up temp directory
process.chdir(projectRoot);
fs.rmSync(tempDir, { recursive: true });

// Calculate file size
const stats = fs.statSync(zipPath);
const fileSizeInMB = (stats.size / 1024 / 1024).toFixed(2);

console.log('\n✨ Package created successfully!');
console.log(`📦 Location: ${zipPath}`);
console.log(`📏 Size: ${fileSizeInMB} MB`);
console.log('\n🎉 Ready for distribution!');

// Helper function to copy directory
function copyDirectorySync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    // Skip node_modules, dist, and other build artifacts
    if (['node_modules', 'dist', '.git', '.DS_Store'].includes(entry.name)) {
      continue;
    }
    
    if (entry.isDirectory()) {
      copyDirectorySync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}