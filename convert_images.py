import os
from PIL import Image
import glob

# distinct source directory
SOURCE_DIR = r"c:\Users\HP\ap-dental-clinic\ap-dental-clinic\public\images\blog"
EXTENSIONS = ['*.png', '*.jpg', '*.jpeg']

def convert_images():
    print(f"Scanning {SOURCE_DIR}...")
    files = []
    for ext in EXTENSIONS:
        files.extend(glob.glob(os.path.join(SOURCE_DIR, ext)))
    
    print(f"Found {len(files)} images to convert.")

    for file_path in files:
        try:
            filename = os.path.basename(file_path)
            name, ext = os.path.splitext(filename)
            target_path = os.path.join(SOURCE_DIR, f"{name}.webp")
            
            # Skip if already exists (or overwrite if desired, but let's be safe for now, 
            # actually prompt implied 'optimise to... they arent already', so let's overwrite/create)
            
            with Image.open(file_path) as img:
                print(f"Converting {filename}...")
                img.save(target_path, "WEBP", quality=85)
                print(f"Saved {target_path}")
        except Exception as e:
            print(f"Error converting {file_path}: {e}")

if __name__ == "__main__":
    convert_images()
