import os
import shutil
from PIL import Image

os.makedirs('public/assets', exist_ok=True)

# Copy primary images to public/assets
if os.path.exists('public_assets/facility.jpg'):
    shutil.copy('public_assets/facility.jpg', 'public/assets/facility.jpg')

if os.path.exists('public_assets/vmc-machine.jpg'):
    shutil.copy('public_assets/vmc-machine.jpg', 'public/assets/vmc-machine.jpg')

if os.path.exists('public_assets/lathe-machine.jpg'):
    shutil.copy('public_assets/lathe-machine.jpg', 'public/assets/lathe-machine.jpg')

if os.path.exists('public_assets/logo-raw.jpeg'):
    shutil.copy('public_assets/logo-raw.jpeg', 'public/assets/logo-raw.jpeg')

if os.path.exists('public_assets/logo-cropped.png'):
    shutil.copy('public_assets/logo-cropped.png', 'public/assets/logo-cropped.png')

# Copy gauge images
for f in os.listdir('extracted_assets'):
    if f.startswith('img_page8_') and f.endswith('.jpeg'):
        shutil.copy(os.path.join('extracted_assets', f), os.path.join('public/assets', f))

# Also copy high-res pages for PDF preview or modal viewer
os.makedirs('public/assets/pdf_pages', exist_ok=True)
for f in os.listdir('extracted_assets/pages_highres'):
    if f.endswith('.png'):
        shutil.copy(os.path.join('extracted_assets/pages_highres', f), os.path.join('public/assets/pdf_pages', f))

# Also let's copy the original PDF file to public/
pdf_source = r'C:\Users\jegth\Downloads\HET PROFILE^^-2.pdf'
if os.path.exists(pdf_source):
    shutil.copy(pdf_source, 'public/Highlight-Engineering-Technology-Profile.pdf')

print("Assets populated in public/ folder.")
