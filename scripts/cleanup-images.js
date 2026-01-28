
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public/images');

const filesToDelete = [
    // Root images
    'about-foundation.jpg',
    'books-and-magazines.jpg',
    'clinic-exterior.jpg',
    'consultation-room-2.jpg',
    'consultation-room.jpg',
    'cosmetic.png',
    'dr-amir.jpg',
    'dr-gurdev-bali.jpg',
    'dr-gurdev-headshot-raw.jpg',
    'dr-gurdev-headshot-raw.webp', // Unused
    'dr-gurdev-headshot.jpg',
    'dr-gurdev-headshot.webp', // Unused
    'dr-junaid.jpg',
    'dr-nidha.jpg',
    'dr-sehrish.jpg',
    'equipments.jpg',
    'general.png',
    'orthodontics.png',
    'preventive.png',
    'smile-story-1.jpg',
    'smile-story-2.jpg',
    'smile-story-3.jpg',
    'smile-story-4.jpg',
    'waiting-area.jpg',
    'dr-gurdev-new.png', // Using jpg
    'dr-gurdev-new.webp', // Using jpg
    'our-team.jpg', // Unused (reverted to books-and-magazines)
    'our-team.webp', // Unused

    // Blog images
    'blog/bleeding-gums.png',
    'blog/child-dental-visit.png',
    'blog/invisalign-vs-braces.png',
    'blog/root-canal.png',
    'blog/sugar-teeth.png',
    'blog/whitening-safety.png',

    // Treatment images
    'treatments/ceramic-veneers.png',
    'treatments/dental-sealants.png',
    'treatments/fluoride-therapy.png',
    'treatments/professional-cleaning.png',
    'treatments/teeth-whitening.png'
];

filesToDelete.forEach(file => {
    const filePath = path.join(publicDir, file);
    try {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            console.log(`Deleted: ${file}`);
        } else {
            console.log(`File not found (already deleted?): ${file}`);
        }
    } catch (err) {
        console.error(`Error deleting ${file}:`, err);
    }
});
