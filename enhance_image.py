from PIL import Image, ImageEnhance
import os

try:
    input_path = r"c:\Users\mehra\AP Dental Clinic\public\images\about-ap-dental.jpg"
    output_path = r"c:\Users\mehra\AP Dental Clinic\public\images\about-ap-dental-enhanced.jpg"

    print(f"Opening image: {input_path}")
    img = Image.open(input_path)

    # Enhance Sharpness
    enhancer = ImageEnhance.Sharpness(img)
    img = enhancer.enhance(1.5) # Increase sharpness by 50%
    print("Sharpness enhanced.")

    # Enhance Contrast
    enhancer = ImageEnhance.Contrast(img)
    img = enhancer.enhance(1.2) # Increase contrast by 20%
    print("Contrast enhanced.")

    # Enhance Color (Saturation) slightly
    enhancer = ImageEnhance.Color(img)
    img = enhancer.enhance(1.1)
    print("Color enhanced.")

    img.save(output_path, quality=95)
    print(f"Enhanced image saved to: {output_path}")

except Exception as e:
    print(f"Error: {e}")
