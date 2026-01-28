
import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const input = path.resolve(__dirname, '../public/images/our-team.jpg');
const output = path.resolve(__dirname, '../public/images/our-team.webp');

console.log(`Converting ${input} to ${output}`);

sharp(input)
    .webp({ quality: 80 })
    .toFile(output)
    .then(() => console.log('Team image converted successfully'))
    .catch(err => console.error('Error converting team image:', err));
