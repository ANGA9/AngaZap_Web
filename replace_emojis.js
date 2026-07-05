const fs = require('fs');
const path = require('path');

const iconMap = {
  '🍔': 'Utensils',
  '📦': 'Package',
  '🛒': 'ShoppingCart',
  '🎧': 'Headphones',
  '🤝': 'Handshake',
  '📰': 'Newspaper',
  '⚡': 'Zap',
  '🎯': 'Target',
  '📍': 'MapPin',
  '🚀': 'Rocket',
  '🌐': 'Globe',
  '✈️': 'Plane',
  '🕒': 'Clock',
  '🧳': 'BaggageClaim',
  '💸': 'Banknote',
  '✅': 'CheckCircle2',
  '🚨': 'AlertTriangle',
  '🚗': 'Car',
  '🚙': 'Car',
  '🚐': 'Truck',
  '🛡️': 'Shield',
  '🛡': 'Shield',
  '📊': 'BarChart',
  '⚙️': 'Settings',
  '⚙': 'Settings',
  '🎓': 'GraduationCap',
  '🏥': 'Hospital',
  '👩🏽': 'User',
  '👩': 'User',
  '🌲': 'TreePine',
  '♻️': 'Recycle',
  '♻': 'Recycle',
  '🔒': 'Lock',
  '❌': 'XCircle',
  '🔗': 'Link',
  '👤': 'User',
  '📱': 'Smartphone',
  '📝': 'FileText',
  '💳': 'CreditCard',
  '📈': 'TrendingUp',
  '📄': 'File',
  '🗣': 'MessageSquare',
  '🌟': 'Star',
  '🦽': 'Accessibility',
  '🐕': 'Dog',
  '🦺': 'ShieldAlert',
  '🏢': 'Building2',
  '💡': 'Lightbulb'
};

const megaMenuStyle = `style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}`;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  const iconsToImport = new Set();
  
  // Replace big emojis that just have fontSize: "40px"
  for (const [emoji, icon] of Object.entries(iconMap)) {
    const regex1 = new RegExp(`<div style={{ fontSize: "40px", marginBottom: "16px" }}>${emoji}</div>`, 'g');
    if (regex1.test(content)) {
      iconsToImport.add(icon);
      content = content.replace(regex1, `<div ${megaMenuStyle}><${icon} size={24} strokeWidth={2} /></div>`);
    }

    const regex2 = new RegExp(`<div style={{ fontSize: "40px", marginBottom: "16px" }}>${emoji}</div>`, 'g');
    if (regex2.test(content)) {
      iconsToImport.add(icon);
      content = content.replace(regex2, `<div ${megaMenuStyle}><${icon} size={24} strokeWidth={2} /></div>`);
    }
  }

  // Replace emojis in existing circular div containers
  // Example: <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "var(--color-indigo-tint)", color: "var(--color-indigo)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", marginBottom: "20px" }}>🎧</div>
  // Wait, let's just use a general regex for container with emoji
  for (const [emoji, icon] of Object.entries(iconMap)) {
    // Look for <div ...>EMOJI</div>
    // We will match a div that contains only the emoji (with optional whitespace)
    const regex = new RegExp(`(<div[^>]*>)\\s*${emoji}\\s*</div>`, 'g');
    let match;
    while ((match = regex.exec(content)) !== null) {
      // If it's a small container or something else, replace the emoji with the icon
      if (!match[1].includes('megaMenuStyle') && match[1].includes('width: "40px"')) {
        iconsToImport.add(icon);
        const newDiv = match[1].replace('borderRadius: "50%"', 'borderRadius: "12px"') + `<${icon} size={20} strokeWidth={2} /></div>`;
        content = content.substring(0, match.index) + newDiv + content.substring(match.index + match[0].length);
        regex.lastIndex = match.index + newDiv.length;
      } else if (!match[1].includes('megaMenuStyle') && match[1].includes('width: "48px"')) {
        iconsToImport.add(icon);
        const newDiv = match[1].replace('borderRadius: "50%"', 'borderRadius: "12px"') + `<${icon} size={24} strokeWidth={2} /></div>`;
        content = content.substring(0, match.index) + newDiv + content.substring(match.index + match[0].length);
        regex.lastIndex = match.index + newDiv.length;
      }
    }
  }

  // Replace emojis in h4 headers or text.
  // Example: <h4 className="font-display" style={{ fontSize: "20px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>🎓 Education Grants</h4>
  // Or: <h4>🤝 Community Building</h4>
  for (const [emoji, icon] of Object.entries(iconMap)) {
    const regex = new RegExp(`(>)\\s*${emoji}\\s+([A-Za-z])`, 'g');
    let match;
    while ((match = regex.exec(content)) !== null) {
      iconsToImport.add(icon);
      const replacement = `${match[1]}<${icon} size={20} strokeWidth={2} style={{ color: "var(--color-indigo)", marginRight: "8px" }} /> ${match[2]}`;
      content = content.substring(0, match.index) + replacement + content.substring(match.index + match[0].length);
      regex.lastIndex = match.index + replacement.length;
    }
  }

  if (iconsToImport.size > 0 && content !== originalContent) {
    // Add import statement
    const importStmt = `import { ${Array.from(iconsToImport).join(', ')} } from "lucide-react";\n`;
    
    // Find where to insert the import
    const lines = content.split('\\n');
    let insertIdx = 0;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('import ')) {
        insertIdx = i;
      }
    }
    lines.splice(insertIdx + 1, 0, importStmt);
    content = lines.join('\\n');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated ' + filePath);
  }
}

function walk(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      walk(file);
    } else if (file.endsWith('.tsx')) {
      processFile(file);
    }
  });
}

walk('./src/app');
