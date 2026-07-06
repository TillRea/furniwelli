import os
import json
import re

base_path = r'e:\Download\Furniwell_Fase1_Prototype_v2\Furniwell_Fase1_Qodex'

def slugify(value):
    value = str(value).lower().strip()
    value = re.sub(r'[^\w\s-]', '', value)
    return re.sub(r'[\s_-]+', '-', value)

def generate_json(category_dir, kicker, output_file):
    full_category_dir = os.path.join(base_path, category_dir)
    if not os.path.exists(full_category_dir):
        print(f"Directory {full_category_dir} does not exist.")
        return []

    products = []
    
    # Iterate through product folders
    for item in os.listdir(full_category_dir):
        product_dir = os.path.join(full_category_dir, item)
        if os.path.isdir(product_dir):
            images = []
            for file in os.listdir(product_dir):
                if file.lower().endswith(('.png', '.jpg', '.jpeg', '.webp', '.gif')):
                    # Use forward slashes for web paths
                    rel_path = f"{category_dir}/{item}/{file}".replace('\\', '/')
                    images.append(rel_path)
            
            if images:
                # Sort images alphabetically so it's deterministic
                images.sort()
                products.append({
                    "id": slugify(item),
                    "title": item,
                    "kicker": kicker,
                    "cover_image": images[0],
                    "gallery": images,
                    "photo_count": len(images),
                    "description": ""
                })
    
    # Sort products alphabetically by title
    products.sort(key=lambda x: x['title'])
    
    with open(os.path.join(base_path, output_file), 'w', encoding='utf-8') as f:
        json.dump(products, f, indent=2, ensure_ascii=False)
        
    print(f"Generated {output_file} with {len(products)} products.")
    return products

print("--- Generating Products JSON ---")
old_products = []
if os.path.exists(os.path.join(base_path, 'products.json')):
    with open(os.path.join(base_path, 'products.json'), 'r', encoding='utf-8') as f:
        old_products = json.load(f)

new_products = generate_json('assets/images/products', 'Products', 'products.json')

print("--- Generating Custom Furniture JSON ---")
old_custom = []
if os.path.exists(os.path.join(base_path, 'custom-furniture.json')):
    with open(os.path.join(base_path, 'custom-furniture.json'), 'r', encoding='utf-8') as f:
        old_custom = json.load(f)

new_custom = generate_json('assets/images/custom-furniture', 'Custom Furniture', 'custom-furniture.json')

def compare(old, new):
    old_titles = set(p['title'] for p in old)
    new_titles = set(p['title'] for p in new)
    
    added = new_titles - old_titles
    removed = old_titles - new_titles
    
    print(f"New products added: {added}")
    print(f"Old products removed: {removed}")
    
    for np in new:
        old_p = next((p for p in old if p['title'] == np['title']), None)
        if old_p:
            if old_p['photo_count'] != np['photo_count']:
                print(f"Photo count changed for '{np['title']}': {old_p['photo_count']} -> {np['photo_count']}")

print("--- Comparison ---")
compare(old_products, new_products)
compare(old_custom, new_custom)
