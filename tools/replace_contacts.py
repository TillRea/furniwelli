import os

base_path = r'e:\Download\Furniwell_Fase1_Prototype_v2\Furniwell_Fase1_Qodex'
extensions = ('.html', '.js', '.json')

replacements = [
    ('furniwellindo@gmail.com', 'Furniwell@gmail.com'),
    ('+62 852 2582 9972', '+62 856 006 144 31'),
    ('tel:+6285225829972', 'tel:+6285600614431'),
    ('WhatsApp +62 856 0061 4431', 'WhatsApp +62 856 006 144 31')
]

updated_files = 0
total_replacements = 0

for root, dirs, files in os.walk(base_path):
    # skip .git or node_modules if any
    if '.git' in root or 'node_modules' in root:
        continue
    for file in files:
        if file.endswith(extensions):
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                original_content = content
                for old_text, new_text in replacements:
                    content = content.replace(old_text, new_text)
                
                if content != original_content:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    
                    changes = sum(original_content.count(old_text) for old_text, _ in replacements)
                    total_replacements += changes
                    updated_files += 1
                    print(f"Updated: {os.path.relpath(file_path, base_path)} ({changes} replacements)")
            except Exception as e:
                print(f"Could not process {file_path}: {e}")

print(f"--- Summary ---")
print(f"Total files updated: {updated_files}")
print(f"Total replacements made: {total_replacements}")
