
import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const input = path.resolve(__dirname, '../public/logo-transparent.png');
const output96 = path.resolve(__dirname, '../public/favicon-96x96.png');
const outputIco = path.resolve(__dirname, '../public/favicon.ico'); // Just doing a 32x32 resize and naming .ico for basic compatibility if needed, though sharp might complain about format.
// Better to just make pngs.

async function generate() {
    console.log(`Processing ${input}...`);

    // 96x96
    await sharp(input)
        .resize(96, 96, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .toFile(output96);
    console.log('Created favicon-96x96.png');

    // 32x32 for legacy/default
    await sharp(input)
        .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .toFile(path.resolve(__dirname, '../public/favicon-32x32.png'));
    console.log('Created favicon-32x32.png');
}

generate().catch(console.error);
