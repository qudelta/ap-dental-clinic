import os
import glob
from PIL import Image
import shutil

ARTIFACT_DIR = r"C:\Users\HP\.gemini\antigravity\brain\df89fc7e-b317-4d30-bbe8-08651654dfb0"
TARGET_DIR = r"c:\Users\HP\ap-dental-clinic\ap-dental-clinic\public\images\treatments"

if not os.path.exists(TARGET_DIR):
    os.makedirs(TARGET_DIR)

IMAGE_MAP = {
    "orthodontics": "orthodontics_gen_*.png",
    "general": "general_dentistry_gen_*.png",
    "cosmetic": "cosmetic_dentistry_gen_*.png",
    "preventive": "preventive_care_gen_*.png"
}

def process_images():
    for name, pattern in IMAGE_MAP.items():
        search_pattern = os.path.join(ARTIFACT_DIR, pattern)
        files = glob.glob(search_pattern)
        if not files:
            print(f"No files found for {name}")
            continue
        
        # Get latest file
        latest_file = max(files, key=os.path.getctime)
        print(f"Processing {name} from {latest_file}...")
        
        try:
            with Image.open(latest_file) as img:
                target_path = os.path.join(TARGET_DIR, f"{name}.webp")
                img.save(target_path, "WEBP", quality=90)
                print(f"Saved {target_path}")
        except Exception as e:
            print(f"Error processing {name}: {e}")

if __name__ == "__main__":
    process_images()
