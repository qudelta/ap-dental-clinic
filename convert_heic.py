from PIL import Image
import pillow_heif
import os

# Register HEIF opener
pillow_heif.register_heif_opener()

source_path = r"D:\AP Dental Images\Meet Dr. Gurdev Bali.heic"
dest_path = r"c:\Users\mehra\AP Dental Clinic\public\images\dr-gurdev-bali.jpg"

try:
    if not os.path.exists(source_path):
        print(f"Error: Source file not found at {source_path}")
        exit(1)

    print(f"Opening {source_path}...")
    image = Image.open(source_path)
    
    print(f"Saving to {dest_path}...")
    image.save(dest_path, "JPEG", quality=95)
    print("Conversion successful!")

except Exception as e:
    print(f"An error occurred: {e}")
    exit(1)
