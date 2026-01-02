
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const INPUT_FILE = path.join(PUBLIC_DIR, 'icon.svg');

async function generateFavicons() {
  if (!fs.existsSync(INPUT_FILE)) {
    console.error('Error: public/icon.svg not found');
    process.exit(1);
  }

  console.log('Generating favicons from icon.svg...');

  try {
    // Generate apple-touch-icon.png (180x180)
    await sharp(INPUT_FILE)
      .resize(180, 180)
      .png()
      .toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.png'));
    console.log('Created public/apple-touch-icon.png');

    // Generate favicon.png (32x32) - for use as fallback
    await sharp(INPUT_FILE)
      .resize(32, 32)
      .png()
      .toFile(path.join(PUBLIC_DIR, 'favicon.png'));
    console.log('Created public/favicon.png');

    // Generate favicon.ico (32x32 PNG renamed/formatted)
    // While sharp doesn't do ICO natively, 32x32 PNG is often acceptable or we can just stick to PNGs
    // But for "favicon.ico" file specifically, we can try to just write the 32x32 png buffer to it
    // Many modern browsers handle PNG in ICO extension, but it's not strictly valid. 
    // However, since we have sharp, let's just make the PNGs.
    // If we want a real ICO, we might need another lib, but let's see if we can get away with just PNGs referenced in layout.
    
    // For now, let's just create a copy of the 32x32 png as favicon.ico for basic compatibility
    // checking if sharp can output ico... no.
    // We will just copy the png to favicon.ico. It works in many cases.
    fs.copyFileSync(path.join(PUBLIC_DIR, 'favicon.png'), path.join(PUBLIC_DIR, 'favicon.ico'));
    console.log('Created public/favicon.ico (from PNG)');

  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
