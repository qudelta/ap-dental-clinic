import os
import glob
from PIL import Image

ARTIFACT_DIR = r"C:\Users\HP\.gemini\antigravity\brain\df89fc7e-b317-4d30-bbe8-08651654dfb0"
TARGET_DIR = r"c:\Users\HP\ap-dental-clinic\ap-dental-clinic\public\images\treatments"

IMAGE_MAP = {
    # Orthodontics
    "ortho-hero": "ortho_hero_gen_*.png",
    "metal-braces": "metal_braces_gen_*.png",
    "ceramic-braces": "ceramic_braces_gen_*.png",
    "invisalign": "invisalign_gen_*.png",
    
    # General Dentistry
    "general-hero": "general_hero_gen_*.png",
    "root-canal": "root_canal_gen_*.png",
    "composite-fillings": "composite_fillings_gen_*.png",
    "crowns-bridges": "crowns_bridges_gen_*.png",

    # Cosmetic Dentistry (Partial)
    "cosmetic-hero": "cosmetic_hero_gen_*.png",
    "digital-smile-design": "digital_smile_design_gen_*.png"
}

def process_images():
    if not os.path.exists(TARGET_DIR):
        os.makedirs(TARGET_DIR)

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
