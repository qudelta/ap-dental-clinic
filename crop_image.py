from PIL import Image, ImageChops

def trim(im):
    bg = Image.new(im.mode, im.size, im.getpixel((0,0)))
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        return im.crop(bbox)
    return im

image_path = r"c:\Users\HP\ap-dental-clinic\ap-dental-clinic\public\images\smile-story-2.webp"
try:
    img = Image.open(image_path)
    print(f"Original size: {img.size}")
    cropped_img = trim(img)
    print(f"Cropped size: {cropped_img.size}")
    cropped_img.save(image_path, "WEBP")
    print("Image cropped and saved.")
except Exception as e:
    print(f"Error: {e}")
