from PIL import Image
import os

IMAGE_DIR = r"c:\Users\mehra\AP Dental Clinic\public\images"
MAX_WIDTH = 1920
QUALITY = 80

def optimize_images():
    if not os.path.exists(IMAGE_DIR):
        print(f"Directory not found: {IMAGE_DIR}")
        return

    print(f"Optimizing images in {IMAGE_DIR}...")
    print("-" * 50)
    
    total_savings = 0

    for filename in os.listdir(IMAGE_DIR):
        if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
            filepath = os.path.join(IMAGE_DIR, filename)
            original_size = os.path.getsize(filepath)
            
            try:
                with Image.open(filepath) as img:
                    # Convert RGBA to RGB if needed
                    if img.mode in ("RGBA", "P"):
                        img = img.convert("RGB")
                    
                    # Resize if too large
                    if img.width > MAX_WIDTH:
                        ratio = MAX_WIDTH / img.width
                        new_height = int(img.height * ratio)
                        img = img.resize((MAX_WIDTH, new_height), Image.Resampling.LANCZOS)
                        
                    # Save with compression
                    img.save(filepath, "JPEG", quality=QUALITY, optimize=True)
                    
                    new_size = os.path.getsize(filepath)
                    saved = original_size - new_size
                    total_savings += saved
                    
                    print(f"Processed {filename}:")
                    print(f"  Old: {original_size/1024/1024:.2f} MB")
                    print(f"  New: {new_size/1024/1024:.2f} MB")
                    print(f"  Saved: {saved/1024/1024:.2f} MB")
                    
            except Exception as e:
                print(f"Error processing {filename}: {e}")

    print("-" * 50)
    print(f"Total Space Saved: {total_savings/1024/1024:.2f} MB")

if __name__ == "__main__":
    optimize_images()
