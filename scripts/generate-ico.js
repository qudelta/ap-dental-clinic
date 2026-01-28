
import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const input = path.resolve(__dirname, '../public/logo-transparent.png');
const outputIco = path.resolve(__dirname, '../public/favicon.ico');

async function generate() {
    console.log(`Processing ${input} to .ico...`);

    // Create a 32x32 PNG and save as .ico (modern standard compatibility)
    await sharp(input)
        .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .toFile(outputIco);

    console.log('Created favicon.ico');
}

generate().catch(console.error);
