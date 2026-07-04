import os
import json

base_path = r'e:\Download\Furniwell_Fase1_Prototype_v2\Furniwell_Fase1_Qodex'

def scan_dir(subpath):
    results = []
    full_path = os.path.join(base_path, 'assets', 'images', subpath)
    if not os.path.exists(full_path):
        return results
        
    for root, dirs, files in os.walk(full_path):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg', '.webp', '.gif')):
                rel_path = os.path.relpath(os.path.join(root, file), base_path).replace('\\', '/')
                folder_name = os.path.basename(root)
                results.append({
                    'image': rel_path,
                    'title': folder_name,
                    'kicker': subpath.split('/')[0].capitalize(),
                })
    return results

data = {
    'products': scan_dir('products'),
    'custom_furniture': scan_dir('custom-furniture'),
    'factory_mesin': scan_dir('factory/mesin'),
    'factory_pekerja': scan_dir('factory/pekerja')
}

with open(os.path.join(base_path, 'tools', 'scanned_data.json'), 'w') as f:
    json.dump(data, f, indent=2)

print("Scanned data saved to tools/scanned_data.json")
