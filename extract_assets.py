import fitz
import os
import shutil
from PIL import Image

pdf_path = r'C:\Users\jegth\Downloads\HET PROFILE^^-2.pdf'
doc = fitz.open(pdf_path)

os.makedirs('public/assets', exist_ok=True)
os.makedirs('public/assets/pdf_pages', exist_ok=True)

# Copy the original PDF to public directory for download
shutil.copy(pdf_path, 'public/Highlight-Engineering-Technology-Profile.pdf')

# 1. Render all high-res pages for the PDF viewer and presentations
for page_num in range(len(doc)):
    page = doc[page_num]
    pix = page.get_pixmap(matrix=fitz.Matrix(3, 3))
    pix.save(f"public/assets/pdf_pages/page_{page_num+1}.png")

print(f"Rendered {len(doc)} pages.")

# 2. Extract specific images from the PDF
seen_xrefs = set()
for page_num in range(len(doc)):
    page = doc[page_num]
    images = page.get_images(full=True)
    for img_idx, img in enumerate(images):
        xref = img[0]
        if xref in seen_xrefs:
            continue
        seen_xrefs.add(xref)
        base_image = doc.extract_image(xref)
        image_bytes = base_image['image']
        image_ext = base_image['ext']
        w = base_image['width']
        h = base_image['height']
        
        # Save raw image
        raw_name = f"public/assets/img_p{page_num+1}_{img_idx+1}_xref{xref}.{image_ext}"
        with open(raw_name, 'wb') as f:
            f.write(image_bytes)

# Specifically create clean named assets:
# Logo from Page 1:
p1 = Image.open("public/assets/pdf_pages/page_1.png")
w, h = p1.size
# Crop high-res logo with the yellow square
logo_box = (int(w * 0.405), int(h * 0.145), int(w * 0.555), int(h * 0.380))
logo_img = p1.crop(logo_box)
logo_img.save("public/assets/logo.png")

# Transparent/Clean logo crop (just the geometric ribbon)
# The logo ribbon has cyan, red, orange, green diagonal ribbon lines forming an 'H' / ribbon shape
logo_inner_box = (int(w * 0.425), int(h * 0.165), int(w * 0.535), int(h * 0.360))
logo_inner = p1.crop(logo_inner_box)
logo_inner.save("public/assets/logo-icon.png")

# Page 3 Company facility building photo:
p3 = Image.open("public/assets/pdf_pages/page_3.png")
pw, ph = p3.size
facility_box = (int(pw * 0.08), int(ph * 0.18), int(pw * 0.92), int(ph * 0.88))
facility_crop = p3.crop(facility_box)
facility_crop.save("public/assets/facility-hq.jpg")

# Page 6 VMC Machine photo:
p6 = Image.open("public/assets/pdf_pages/page_6.png")
pw6, ph6 = p6.size
vmc_box = (int(pw6 * 0.44), int(ph6 * 0.18), int(pw6 * 0.98), int(ph6 * 0.95))
vmc_crop = p6.crop(vmc_box)
vmc_crop.save("public/assets/vmc-machine-hq.png")

# Page 7 Lathe Machine photo:
p7 = Image.open("public/assets/pdf_pages/page_7.png")
pw7, ph7 = p7.size
lathe_box = (int(pw7 * 0.12), int(ph7 * 0.12), int(pw7 * 0.88), int(ph7 * 0.46))
lathe_crop = p7.crop(lathe_box)
lathe_crop.save("public/assets/lathe-machine-hq.png")

# Page 8 Instruments photos:
p8 = Image.open("public/assets/pdf_pages/page_8.png")
pw8, ph8 = p8.size
# Instruments left strip
inst_left_box = (int(pw8 * 0.07), int(ph8 * 0.14), int(pw8 * 0.26), int(ph8 * 0.96))
p8.crop(inst_left_box).save("public/assets/instruments-left.png")

# Instruments right strip
inst_right_box = (int(pw8 * 0.72), int(ph8 * 0.14), int(pw8 * 0.92), int(ph8 * 0.96))
p8.crop(inst_right_box).save("public/assets/instruments-right.png")

print("All assets extracted and processed successfully into public/assets/!")
