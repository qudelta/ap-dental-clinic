from PIL import Image
import os

INPUT_PATH = r"c:\Users\mehra\AP Dental Clinic\public\images\dr-gurdev-headshot-raw.jpg"
OUTPUT_PATH = r"c:\Users\mehra\AP Dental Clinic\public\images\dr-gurdev-headshot.jpg"
SIZE = 600  # Final size 600x600

def crop_headshot():
    if not os.path.exists(INPUT_PATH):
        print(f"Error: {INPUT_PATH} not found.")
        return

    try:
        with Image.open(INPUT_PATH) as img:
            # Convert to RGB
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")

            width, height = img.size
            min_dim = min(width, height)

            # Calculate crop box
            if width > height:
                # Landscape: Center crop
                left = (width - min_dim) // 2
                top = 0
                right = left + min_dim
                bottom = min_dim
            else:
                # Portrait: Top-Center crop (usually better for headshots to avoid too much empty space above)
                # But let's do safe center crop for now, or slightly higher
                left = 0
                # Move crop slightly up from center to catch head
                top = (height - min_dim) // 4  
                right = min_dim
                bottom = top + min_dim
                
                # Correction if top < 0
                if top < 0:
                    top = 0
                    bottom = min_dim

            # Crop
            img_cropped = img.crop((left, top, right, bottom))
            
            # Resize
            img_resized = img_cropped.resize((SIZE, SIZE), Image.Resampling.LANCZOS)
            
            # Save
            img_resized.save(OUTPUT_PATH, "JPEG", quality=85)
            print(f"Successfully cropped and saved to {OUTPUT_PATH}")

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    crop_headshot()
