INSERT INTO menu_categories (name, slug, display_order)
VALUES
  ('Coffee', 'coffee', 1),
  ('Ceviches', 'ceviches', 2),
  ('Causas', 'causas', 3),
  ('Shareables', 'shareables', 4),
  ('Beer & Wine', 'beer-wine', 5);

INSERT INTO menu_items (
  category_id,
  name,
  description,
  price,
  image_url,
  is_featured
)
VALUES
  (
    1,
    'Signature Coffee',
    'Rich espresso, iced lattes, and cozy cafe favorites.',
    4.50,
    '/images/coffee.jpg',
    true
  ),
  (
    2,
    'Fresh Ceviche',
    'Bright citrus, fresh seafood, red onion, cilantro, and Peruvian flavor.',
    18.00,
    '/images/ceviche.jpg',
    true
  ),
  (
    3,
    'Classic Causa',
    'Chilled Peruvian potato layers with creamy, savory fillings.',
    14.00,
    '/images/causa.jpg',
    true
  ),
  (
    4,
    'Shareable Plates',
    'Small plates made for friends, drinks, and late cafe nights.',
    16.00,
    '/images/shareables.jpg',
    true
  ),
  (
    5,
    'Red Horse',
    'A bold Filipino beer favorite, perfect with savory shareables.',
    7.00,
    '/images/red-horse.png',
    false
  ),
  (
    5,
    'House Wine',
    'Easy red and white wine pours for cafe nights.',
    9.00,
    '/images/bar.jpg',
    false
  );